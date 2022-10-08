import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { darkTheme } from '../themes/darktheme'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={darkTheme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
