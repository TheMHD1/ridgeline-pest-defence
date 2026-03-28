// Form constants for consistent placeholder values and validation patterns

const generateExampleEmails = () => {
  const domains = ['gmail.com', 'hotmail.com', 'yahoo.com'];
  const primaryDomain = domains[Math.floor(Math.random() * domains.length)];
  const secondaryDomain = domains[Math.floor(Math.random() * domains.length)];
  return {
    email: `you@${primaryDomain}`,
    friendEmail: `friend@${secondaryDomain}`,
  };
};

export const FORM_PLACEHOLDERS = {
  ...generateExampleEmails(),
  name: "Your full name",
  message: "Describe your pest issue, property type, and preferred contact time...",
} as const;

export const FORM_PATTERNS = {
  // Email regex pattern for validation
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,

  // North American phone number pattern (accepts various formats)
  // Matches: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890, +1 123 456 7890, etc.
  phone: /^(?:\+?1[-.\s]?)?(?:\(([0-9]{3})\)|([0-9]{3}))[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
} as const;

export const FORM_VALIDATION_MESSAGES = {
  email: {
    required: "Email address is required.",
    invalid: "Please enter a valid email address.",
  },
  phone: {
    required: "Phone number is required.",
    invalid: "Please enter a valid North American phone number.",
  },
  name: {
    required: "Full name is required.",
  },
  message: {
    required: "Please describe how we can help.",
  },
} as const;

export const FORM_STYLES = {
  label: "block text-sm font-medium text-foreground mb-1.5",
  errorAlert: "rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive",
  input: "w-full rounded-lg border bg-background py-3 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary",
} as const;