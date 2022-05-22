const Button = {
  baseStyle: {
    borderRadius: 'full',
    fontWeight: 'black',
  },
  variants: {
    primary: {
      bg: 'bcDeepPurple.700',
      color: 'white',
      _hover: {
        bg: 'bcPeriwinkle',
        boxShadow: 'md',
        textDecoration: 'none',
      },
    },
    secondary: {
      layerStyle: 'purpleOnOrange',
      _hover: {
        bg: 'bcOrange.300',
        boxShadow: 'md',
        textDecoration: 'none',
      },
    },
  },
};

export default Button;
