import { Box, Container, Grid, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <Box borderTop="1px"borderColor="#fefefe2e" py={5}>

      <Container>
        <Grid alignItems='center' justifyContent='center' textAlign='center'>
          <Text
            fontWeight={800}
            bgGradient='linear(to-l,  orange_ligth,orange)'
            bgClip='text'
            fontSize='2xl'
            >
            Event Date
          </Text>
          <Text>Todos los derechos &copy;Mattias Duarte</Text>
        </Grid>
      </Container>
      </Box>
    </footer>
  )
}

export default Footer