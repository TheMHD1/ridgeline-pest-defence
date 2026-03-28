"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error" | "timeout";

interface UseFormSubmissionOptions {
  endpoint: string;
  validate: (formData: FormData) => Record<string, string>;
}

export function useFormSubmission({ endpoint, validate }: UseFormSubmissionOptions) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const submittingRef = useRef(false);
  const controllerRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
    }
  }, [status]);

  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
      clearTimeout(timeoutRef.current);
    };
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot validation - silently fail for bots
    if (formData.get('_gotcha')) {
      setStatus('success');
      form.reset();
      submittingRef.current = false;
      return;
    }

    const errors = validate(formData);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      const firstErrorField = form.querySelector<HTMLElement>(
        `[name="${Object.keys(errors)[0]}"]`
      );
      firstErrorField?.focus();
      submittingRef.current = false;
      return;
    }
    setFieldErrors({});

    setStatus("loading");

    // Abort any existing request
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();
    timeoutRef.current = setTimeout(() => controllerRef.current?.abort(), 15000);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
        signal: controllerRef.current.signal,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      if ((error as Error).name === 'AbortError') {
        setStatus("timeout");
      } else {
        setStatus("error");
      }
    } finally {
      clearTimeout(timeoutRef.current);
      submittingRef.current = false;
    }
  }

  function clearFieldError(fieldName: string) {
    setFieldErrors((prev) => {
      if (!prev[fieldName]) return prev;
      const next = { ...prev };
      delete next[fieldName];
      return next;
    });
  }

  function resetForm() {
    setStatus("idle");
    setTimeout(
      () => formRef.current?.querySelector<HTMLElement>("input")?.focus(),
      0
    );
  }

  return { status, fieldErrors, formRef, successRef, handleSubmit, resetForm, clearFieldError };
}
