"use client";

import { siteConfig } from "@/content/site.config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { FORM_PLACEHOLDERS, FORM_PATTERNS, FORM_VALIDATION_MESSAGES, FORM_STYLES } from "./form-constants";
import { useFormSubmission } from "./useFormSubmission";

interface FormspreeFormProps {
  variant: "lead" | "booking";
  className?: string;
  id?: string;
}

export function FormspreeForm({ variant, className, id }: FormspreeFormProps) {
  const endpoint = siteConfig.integrations.formspree.endpoint;
  const isPlaceholder = !endpoint || endpoint.includes("PLACEHOLDER");

  const { status, fieldErrors, formRef, successRef, handleSubmit, resetForm, clearFieldError } = useFormSubmission({
    endpoint,
    validate(formData) {
      const name = ((formData.get("name") as string) ?? "").trim();
      const email = ((formData.get("email") as string) ?? "").trim();
      const phone = ((formData.get("phone") as string) ?? "").trim();
      const message = ((formData.get("message") as string) ?? "").trim();

      const errors: Record<string, string> = {};
      if (!name) errors.name = FORM_VALIDATION_MESSAGES.name.required;
      if (!email) {
        errors.email = FORM_VALIDATION_MESSAGES.email.required;
      } else if (!FORM_PATTERNS.email.test(email)) {
        errors.email = FORM_VALIDATION_MESSAGES.email.invalid;
      }
      if (!phone) {
        errors.phone = FORM_VALIDATION_MESSAGES.phone.required;
      } else if (!FORM_PATTERNS.phone.test(phone)) {
        errors.phone = FORM_VALIDATION_MESSAGES.phone.invalid;
      }
      if (!message) errors.message = FORM_VALIDATION_MESSAGES.message.required;
      return errors;
    },
  });

  if (isPlaceholder) {
    return (
      <div className={cn("rounded-xl border border-border bg-muted/30 p-8 text-center", className)}>
        <p className="text-sm text-muted-foreground mb-4">
          Our online form is being configured. In the meantime, reach us directly:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Call {siteConfig.contact.phone}
          </a>
          <a
            href={siteConfig.contact.emailHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
          >
            Email Us
          </a>
        </div>
      </div>
    );
  }

  const prefix = id || variant;

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" aria-live="polite" className={cn("rounded-xl border border-primary/20 bg-primary/5 p-8 text-center", className)}>
        <svg
          className="mx-auto h-12 w-12 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 font-heading text-xl text-foreground">Thank You!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ve received your message and will get back to you within 2 hours.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-4 text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <>
    <link rel="dns-prefetch" href={siteConfig.integrations.formspree.baseUrl} />
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
      noValidate
      aria-busy={status === "loading"}
      aria-label={variant === "booking" ? "Book a pest inspection" : "Contact us"}
    >
      {status === "error" && (
        <div className={FORM_STYLES.errorAlert} role="alert">
          Something went wrong. Please try again or call us at {siteConfig.contact.phone}.
        </div>
      )}

      {status === "timeout" && (
        <div className={FORM_STYLES.errorAlert} role="alert">
          Request timed out. Please check your connection and try again, or call us at {siteConfig.contact.phone}.
        </div>
      )}

      {/* Screen reader status announcements */}
      <span role="status" className="sr-only">
        {status === "loading" ? "Submitting form..." : status === "error" ? "Form submission failed. Please try again." : status === "timeout" ? "Request timed out. Please check your connection and try again." : ""}
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${prefix}-name`} className={FORM_STYLES.label}>
            Full Name <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id={`${prefix}-name`}
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            aria-required="true"
            aria-invalid={fieldErrors.name ? "true" : undefined}
            aria-describedby={fieldErrors.name ? `${prefix}-name-error` : undefined}
            className={cn(FORM_STYLES.input, fieldErrors.name ? "border-destructive" : "border-muted")}
            placeholder="Your full name"
            onChange={() => clearFieldError("name")}
          />
          {fieldErrors.name && <span id={`${prefix}-name-error`} role="alert" className="text-xs text-destructive mt-1 block">{fieldErrors.name}</span>}
        </div>
        <div>
          <label htmlFor={`${prefix}-phone`} className={FORM_STYLES.label}>
            Phone Number <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id={`${prefix}-phone`}
            name="phone"
            type="tel"
            required
            maxLength={20}
            autoComplete="tel"
            aria-required="true"
            aria-invalid={fieldErrors.phone ? "true" : undefined}
            aria-describedby={fieldErrors.phone ? `${prefix}-phone-error` : undefined}
            className={cn(FORM_STYLES.input, fieldErrors.phone ? "border-destructive" : "border-muted")}
            placeholder={siteConfig.contact.phone}
            onChange={() => clearFieldError("phone")}
          />
          {fieldErrors.phone && <span id={`${prefix}-phone-error`} role="alert" className="text-xs text-destructive mt-1 block">{fieldErrors.phone}</span>}
        </div>
      </div>

      <div>
        <label htmlFor={`${prefix}-email`} className={FORM_STYLES.label}>
          Email Address <span aria-hidden="true" className="text-destructive">*</span>
        </label>
        <input
          id={`${prefix}-email`}
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          aria-required="true"
          aria-invalid={fieldErrors.email ? "true" : undefined}
          aria-describedby={fieldErrors.email ? `${prefix}-email-error` : undefined}
          className={cn(FORM_STYLES.input, fieldErrors.email ? "border-destructive" : "border-muted")}
          placeholder={FORM_PLACEHOLDERS.email}
          onChange={() => clearFieldError("email")}
        />
        {fieldErrors.email && <span id={`${prefix}-email-error`} role="alert" className="text-xs text-destructive mt-1 block">{fieldErrors.email}</span>}
      </div>

      <div>
        <label htmlFor={`${prefix}-message`} className={FORM_STYLES.label}>
          How can we help? <span aria-hidden="true" className="text-destructive">*</span>
        </label>
        <textarea
          id={`${prefix}-message`}
          name="message"
          rows={4}
          required
          maxLength={2000}
          autoComplete="off"
          aria-required="true"
          aria-invalid={fieldErrors.message ? "true" : undefined}
          aria-describedby={fieldErrors.message ? `${prefix}-message-error` : undefined}
          className={cn(FORM_STYLES.input, "resize-y", fieldErrors.message ? "border-destructive" : "border-muted")}
          placeholder="Describe your pest issue, property type, and preferred contact time..."
          onChange={() => clearFieldError("message")}
        />
        {fieldErrors.message && <span id={`${prefix}-message-error`} role="alert" className="text-xs text-destructive mt-1 block">{fieldErrors.message}</span>}
      </div>

      {/* Form type identification for backend */}
      <input type="hidden" name="_form_type" value={variant} />

      {/* Honeypot anti-spam */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={status === "loading"}
        className="w-full shadow-lg hover:shadow-xl"
      >
        {status === "loading" ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : variant === "booking"
          ? "Book Your Inspection"
          : "Send Message"}
      </Button>
    </form>
    </>
  );
}
