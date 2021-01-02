import { theme } from "@chakra-ui/core";

console.log('theme: ', theme);

export const breakpoints = ["30em", "48em", "62em", "105em"];

export default {
  ...theme,
  breakpoints,
  colors: {
    ...theme.colors,
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, system-ui, sans-serif",
    mono: "Menlo, monospace",
    serif: "Vollkorn, serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "2.625rem", // 42px
    "6xl": "3.125rem",
  },
};
