"use client";

import { siteConfig } from "@/content/site.config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { FORM_PLACEHOLDERS, FORM_PATTERNS, FORM_VALIDATION_MESSAGES, FORM_STYLES } from "./form-constants";
import { useFormSubmission } from "./useFormSubmission";

function validateReferralForm(formData: FormData): Record<string, string> {
  const yourName = ((formData.get("your-name") as string) ?? "").trim();
  const yourEmail = ((formData.get("your-email") as string) ?? "").trim();
  const yourPhone = ((formData.get("your-phone") as string) ?? "").trim();
  const friendName = ((formData.get("friend-name") as string) ?? "").trim();
  const friendEmail = ((formData.get("friend-email") as string) ?? "").trim();
  const friendPhone = ((formData.get("friend-phone") as string) ?? "").trim();

  const errors: Record<string, string> = {};
  if (!yourName) errors["your-name"] = FORM_VALIDATION_MESSAGES.name?.required || "Your name is required.";
  if (!yourEmail) {
    errors["your-email"] = FORM_VALIDATION_MESSAGES.email.required;
  } else if (!FORM_PATTERNS.email.test(yourEmail)) {
    errors["your-email"] = FORM_VALIDATION_MESSAGES.email.invalid;
  }
  if (!yourPhone) {
    errors["your-phone"] = FORM_VALIDATION_MESSAGES.phone.required;
  } else if (!FORM_PATTERNS.phone.test(yourPhone)) {
    errors["your-phone"] = FORM_VALIDATION_MESSAGES.phone.invalid;
  }
  if (!friendName) errors["friend-name"] = FORM_VALIDATION_MESSAGES.name?.required || "Friend's name is required.";
  if (!friendEmail) {
    errors["friend-email"] = FORM_VALIDATION_MESSAGES.email.required;
  } else if (!FORM_PATTERNS.email.test(friendEmail)) {
    errors["friend-email"] = FORM_VALIDATION_MESSAGES.email.invalid;
  }
  if (!friendPhone) {
    errors["friend-phone"] = FORM_VALIDATION_MESSAGES.phone.required;
  } else if (!FORM_PATTERNS.phone.test(friendPhone)) {
    errors["friend-phone"] = FORM_VALIDATION_MESSAGES.phone.invalid;
  }
  return errors;
}

interface ReferralFormComponentProps {
  className?: string;
  submitLabel?: string;
}

export function ReferralFormComponent({ className, submitLabel = "Submit & Earn $50" }: ReferralFormComponentProps) {
  const endpoint = siteConfig.integrations.formspree.endpoint;
  const isPlaceholder = !endpoint || endpoint.includes("PLACEHOLDER");

  const { status, fieldErrors, formRef, successRef, handleSubmit, resetForm, clearFieldError } = useFormSubmission({
    endpoint,
    validate: validateReferralForm,
  });

  if (isPlaceholder) {
    return (
      <div className={cn("rounded-xl border border-border bg-muted/30 p-8 text-center", className)}>
        <p className="text-sm text-muted-foreground">
          Referral form is being configured. Please call us at {siteConfig.contact.phone}.
        </p>
      </div>
    );
  }

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
        <h3 className="mt-4 font-heading text-xl text-foreground">Referral Submitted!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll reach out to your friend shortly. You&apos;ll earn $50 once they complete their first service.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-4 text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
        >
          Submit Another Referral
        </button>
      </div>
    );
  }


  return (
    <form ref={formRef} onSubmit={handleSubmit} className={cn("space-y-8", className)} noValidate aria-busy={status === "loading"}>
      {status === "error" && (
        <div className={FORM_STYLES.errorAlert} role="alert">
          Something went wrong. Please try again or call us at {siteConfig.contact.phone}.
        </div>
      )}

      {/* Your Information */}
      <fieldset>
        <legend className="font-heading text-xl text-foreground mb-4">Your Information</legend>
        <div className="space-y-4">
          <div>
            <label htmlFor="ref-your-name" className={FORM_STYLES.label}>
              Your Name <span aria-hidden="true" className="text-destructive">*</span>
            </label>
            <input
              id="ref-your-name"
              name="your-name"
              type="text"
              required
              autoComplete="name"
              aria-required="true"
              aria-invalid={fieldErrors["your-name"] ? "true" : undefined}
              aria-describedby={fieldErrors["your-name"] ? "ref-your-name-error" : undefined}
              className={cn(FORM_STYLES.input, fieldErrors["your-name"] && "border-destructive")}
              placeholder="Your full name"
              onChange={() => clearFieldError("your-name")}
            />
            {fieldErrors["your-name"] && <span id="ref-your-name-error" role="alert" className="text-xs text-destructive mt-1 block">{fieldErrors["your-name"]}</span>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ref-your-email" className={FORM_STYLES.label}>
                Your Email <span aria-hidden="true" className="text-destructive">*</span>
              </label>
              <input
                id="ref-your-email"
                name="your-email"
                type="email"
                required
                autoComplete="email"
                aria-required="true"
                aria-invalid={fieldErrors["your-email"] ? "true" : undefined}
                aria-describedby={fieldErrors["your-email"] ? "ref-your-email-error" : undefined}
                className={cn(FORM_STYLES.input, fieldErrors["your-email"] && "border-destructive")}
                placeholder={FORM_PLACEHOLDERS.email}
                onChange={() => clearFieldError("your-email")}
              />
              {fieldErrors["your-email"] && <span id="ref-your-email-error" role="alert" className="text-xs text-destructive mt-1 block">{fieldErrors["your-email"]}</span>}
            </div>
            <div>
              <label htmlFor="ref-your-phone" className={FORM_STYLES.label}>
                Your Phone <span aria-hidden="true" className="text-destructive">*</span>
              </label>
              <input
                id="ref-your-phone"
                name="your-phone"
                type="tel"
                required
                autoComplete="tel"
                aria-required="true"
                aria-invalid={fieldErrors["your-phone"] ? "true" : undefined}
                aria-describedby={fieldErrors["your-phone"] ? "ref-your-phone-error" : undefined}
                className={cn(FORM_STYLES.input, fieldErrors["your-phone"] && "border-destructive")}
                placeholder={siteConfig.contact.phone}
                onChange={() => clearFieldError("your-phone")}
              />
              {fieldErrors["your-phone"] && <span id="ref-your-phone-error" role="alert" className="text-xs text-destructive mt-1 block">{fieldErrors["your-phone"]}</span>}
            </div>
          </div>
        </div>
      </fieldset>

      <hr className="border-border" />

      {/* Friend's Information */}
      <fieldset>
        <legend className="font-heading text-xl text-foreground mb-4">Friend&apos;s Information</legend>
        <div className="space-y-4">
          <div>
            <label htmlFor="ref-friend-name" className={FORM_STYLES.label}>
              Friend&apos;s Name <span aria-hidden="true" className="text-destructive">*</span>
            </label>
            <input
              id="ref-friend-name"
              name="friend-name"
              type="text"
              required
              autoComplete="off"
              aria-required="true"
              aria-invalid={fieldErrors["friend-name"] ? "true" : undefined}
              aria-describedby={fieldErrors["friend-name"] ? "ref-friend-name-error" : undefined}
              className={cn(FORM_STYLES.input, fieldErrors["friend-name"] && "border-destructive")}
              placeholder="Friend's full name"
              onChange={() => clearFieldError("friend-name")}
            />
            {fieldErrors["friend-name"] && <span id="ref-friend-name-error" role="alert" className="text-xs text-destructive mt-1 block">{fieldErrors["friend-name"]}</span>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ref-friend-email" className={FORM_STYLES.label}>
                Friend&apos;s Email <span aria-hidden="true" className="text-destructive">*</span>
              </label>
              <input
                id="ref-friend-email"
                name="friend-email"
                type="email"
                required
                autoComplete="off"
                aria-required="true"
                aria-invalid={fieldErrors["friend-email"] ? "true" : undefined}
                aria-describedby={fieldErrors["friend-email"] ? "ref-friend-email-error" : undefined}
                className={cn(FORM_STYLES.input, fieldErrors["friend-email"] && "border-destructive")}
                placeholder={FORM_PLACEHOLDERS.friendEmail}
                onChange={() => clearFieldError("friend-email")}
              />
              {fieldErrors["friend-email"] && <span id="ref-friend-email-error" role="alert" className="text-xs text-destructive mt-1 block">{fieldErrors["friend-email"]}</span>}
            </div>
            <div>
              <label htmlFor="ref-friend-phone" className={FORM_STYLES.label}>
                Friend&apos;s Phone <span aria-hidden="true" className="text-destructive">*</span>
              </label>
              <input
                id="ref-friend-phone"
                name="friend-phone"
                type="tel"
                required
                autoComplete="off"
                aria-required="true"
                aria-invalid={fieldErrors["friend-phone"] ? "true" : undefined}
                aria-describedby={fieldErrors["friend-phone"] ? "ref-friend-phone-error" : undefined}
                className={cn(FORM_STYLES.input, fieldErrors["friend-phone"] && "border-destructive")}
                placeholder={siteConfig.contact.phone}
                onChange={() => clearFieldError("friend-phone")}
              />
              {fieldErrors["friend-phone"] && <span id="ref-friend-phone-error" role="alert" className="text-xs text-destructive mt-1 block">{fieldErrors["friend-phone"]}</span>}
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          By submitting, you confirm your friend has agreed to be contacted. Their information is handled per our Privacy Policy.
        </p>
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="ref-message" className={FORM_STYLES.label}>
          Additional Message (Optional)
        </label>
        <textarea
          id="ref-message"
          name="message"
          rows={3}
          autoComplete="off"
          className={cn(FORM_STYLES.input, "resize-y")}
          placeholder="Anything else we should know..."
        />
      </div>

      {/* Honeypot anti-spam */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <Button
        type="submit"
        variant="accent"
        size="md"
        disabled={status === "loading"}
        className="w-full shadow-lg hover:shadow-xl transition-shadow duration-200"
      >
        {status === "loading" ? "Submitting..." : submitLabel}
      </Button>
    </form>
  );
}
