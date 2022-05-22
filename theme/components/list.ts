const List = {
  parts: ['container', 'item'],
  variants: {
    mainMenu: {
      container: {
        display: 'flex',
        alignItems: 'stretch',
      },
      item: {
        display: 'flex',
        _notLast: {
          marginRight: { base: '4', lg: '9' },
        },
      },
    },
    mobileMenu: {
      container: {
        paddingY: '12',
        paddingX: '6',
      },
      item: {
        marginBottom: '8',
      },
    },
    mobileSubMenu: {
      item: {
        marginTop: '6',
        marginBottom: '2',
        marginLeft: '4',
      },
    },
    footerMenu: {
      container: {
        columns: { base: '2', lg: '1' },
        display: { base: 'block', lg: 'flex' },
        flexWrap: { lg: 'wrap' },
        width: { base: '100%', md: '75%', lg: '100%' },
      },
      item: {
        marginRight: 6,
        marginBottom: { base: '1', md: '2' },
        lineHeight: 8,
      },
    },
    footerSocialMenu: {
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        paddingTop: '4',
      },
      item: {
        marginRight: 5,
        marginBottom: 4,
      },
    },
  },
};

export default List;
