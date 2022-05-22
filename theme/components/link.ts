const Link = {
  variants: {
    customerMenu: {
      textStyle: 'customerMenu',
      color: 'bcDeepPurple.700',
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    footerSocialMenu: {
      textStyle: 'footerMenu',
      display: 'flex',
      alignItems: 'center',
    },
    menuLink: {
      _hover: {
        textDecoration: 'none',
      },
    },
  },
};

export default Link;
