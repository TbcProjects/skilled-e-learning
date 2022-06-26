const Button = {
  baseStyle: {
    borderRadius: "full",
    fontWeight: "black",
  },
  variants: {
    primary: {
      fontSize: "1.125rem",
      bg: "primary.bunting",
      color: "white",
      _hover: {
        bg: "primary.scampi",
        textDecoration: "none",
      },
      paddingX: "8",
      paddingY: "1.625rem",
    },
    secondary: {
      fontSize: "1.125rem",
      lineHeight: "28px",
      bgGradient: "linear(to-b, gradient.persimmon, gradient.persian_rose)",
      color: "white",
      _hover: {
        bg: "red",
        boxShadow: "md",
        textDecoration: "none",
      },
      paddingX: "8",
      paddingY: "7",
    },
    tertiary: {
      fontSize: "1.125rem",
      bgGradient: "linear(to-b, gradient.purple_heart, gradient.persian_rose)",
      color: "white",
      _hover: {
        bg: "red",
        boxShadow: "md",
        textDecoration: "none",
      },
      paddingX: "8",
      paddingY: "1.625rem",
    },
  },
};

export default Button;
