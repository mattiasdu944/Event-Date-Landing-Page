import { extendTheme } from "@chakra-ui/react";

export const darkTheme = extendTheme({
    colors: {
      orange: '#FF433A',
      orange_ligth: '#FF827C',
      gray: '#F0F2F7',
      white: '#FEFEFE',
      blue:{
        500 : '#1B1B2B',
        900 : '#010101',
      }
    },
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: 'blue.900',
          color: 'gray',
        },
      },
    },
    textStyles: {
      h1: {
        // you can also use responsive styles
        fontSize: ['48px', '72px'],
        fontWeight: '800',
        lineHeight: '110%',
        // letterSpacing: '-22%',
      },
      h2: {
        fontSize: ['36px', '48px'],
        fontWeight: 'semibold',
        fontWeight: '700',
        lineHeight: '110%',
      },
      p:{
        fontSize: ['1rem', '1.25rem'],
        fontWeight: '500',
      }
    },
  });