import Layout from './components/Layout'

import styles from '../styles/Main.module.css'
import {Container, Text } from '@chakra-ui/react'


const Home = () => {
  return (
    <Layout>
      <section className={`${styles.section} ${styles.home_section}`}>
        <Container maxW='container.lg' py='5rem'>
          <Text fontSize={{ base: '14vw', sm:'6xl', md:'7xl', lg:'8xl' }} textAlign={{base:'center', md:'start'}} fontWeight={800} lineHeight={1.2}>
            Encuentra los <br/><span> Eventos </span> <br/> mas importantes.
          </Text>
          <Text fontSize={{base:'md', sm:'lg'}}  textAlign={{base:'center', md:'start'}} mt={5}>
            La plataforma diseñada para que puedas publicar <br/> o encontrar los eventos que quieras asistir
          </Text>
          <a className={styles.button} href='##'>
            Inicar Sesion
          </a>
        </Container>
      </section>
    </Layout>
  )
}

export default Home