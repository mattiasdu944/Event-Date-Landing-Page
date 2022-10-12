import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
        <Head>
            <title>Event Date</title>
            <meta name="description" content="Event Date - Plataforma para publicar, organizar y encontrar tus eventos favoritos" />
        </Head>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>

    </>
  )
}

export default Layout