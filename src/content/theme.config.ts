export const themeConfig = {
  colors: {
    light: {
      primary: "152 38% 26%",
      primaryHex: "#295C45",
      primaryForeground: "40 25% 97%",
      secondary: "220 12% 35%",
      secondaryHex: "#4E5463",
      secondaryForeground: "40 25% 97%",
      accent: "36 68% 35%",
      accentHex: "#946A1B",
      accentForeground: "40 25% 97%",
      background: "40 25% 97%",
      backgroundHex: "#F9F7F3",
      foreground: "200 8% 16%",
      foregroundHex: "#262B2E",
      muted: "150 10% 88%",
      mutedHex: "#D9E2DD",
      mutedForeground: "180 6% 45%",
      destructive: "8 72% 41%",
      destructiveHex: "#B5361E",
      destructiveForeground: "40 25% 97%",
      border: "150 10% 85%",
      input: "150 10% 82%",
      ring: "152 38% 26%",
      card: "40 20% 99%",
      cardForeground: "200 8% 16%",
    },
    dark: {
      primary: "152 38% 36%",
      primaryForeground: "40 25% 97%",
      secondary: "220 12% 55%",
      secondaryForeground: "40 25% 97%",
      accent: "36 68% 50%",
      accentForeground: "200 8% 10%",
      background: "200 10% 10%",
      foreground: "40 20% 92%",
      muted: "200 8% 18%",
      mutedForeground: "180 6% 65%",
      destructive: "8 68% 55%",
      destructiveForeground: "40 25% 97%",
      border: "200 8% 20%",
      input: "200 8% 22%",
      ring: "152 38% 36%",
      card: "200 10% 12%",
      cardForeground: "40 20% 92%",
    },
  },

  fonts: {
    heading: {
      family: "DM Serif Display",
      fallback: "Georgia, serif",
      weight: "400",
    },
    body: {
      family: "Inter",
      fallback: "system-ui, sans-serif",
      weight: "400",
    },
  },

  scale: {
    ratio: 1.333,
    base: "1.0625rem",
  },

  radius: "0.625rem",

  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
  },
} as const;

export type ThemeConfig = typeof themeConfig;
