"use client";

export function ManageCookiesButton() {
  return (
    <>
      <span id="cookie-mgmt-desc" className="sr-only">Opens cookie preference settings to manage tracking and analytics cookies</span>
      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event("manage-cookies"))}
        className="underline underline-offset-2 hover:text-accent transition-colors"
        aria-label="Manage cookie preferences"
        aria-describedby="cookie-mgmt-desc"
      >
        Manage Cookies
      </button>
    </>
  );
}
