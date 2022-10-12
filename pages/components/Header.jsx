import { Box, Button, Container, Flex, List, ListItem, Text } from '@chakra-ui/react'
import { nav_links } from '../../constants/constants'
import styles from '../../styles/Header.module.css'
import DrawerMenu from './DrawerMenu'

const Header = () => {
  return (
    <header>
        <nav className={styles.nav}>
            <Box backdropFilter='auto' backdropBlur='8px'>
                <Container maxW='container.lg' py={3}>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <Text 
                            fontWeight={800}   
                            bgGradient='linear(to-l,  orange_ligth,orange)'
                            bgClip='text'
                            fontSize='2xl'
                        >
                            Event Date
                        </Text>
                        <List display={{ base: 'none', md: 'block'}}>
                            <Flex gap={5}>
                                {nav_links.map(enlace => 
                                    <ListItem key={enlace.path}>
                                        <a href={enlace.path}>{enlace.name}</a>
                                    </ListItem>
                                )}
                            </Flex>
                        </List>

                        {/* <Flex display={{ base: 'none', md: 'block'}} gap={5} > */}
                        <Box display={{ base: 'none', md: 'flex'}} gap={5}>

                            <Button color='orange' variant='link'>
                                Iniciar Sesion
                            </Button>

                            <Button color="orange" variant='outline'>
                                Registrarse 
                            </Button>

                        </Box>
                        {/* </Flex> */}
                        <Box display={{ md: 'none'}}>
                            <DrawerMenu/>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </nav>
    </header>
  )
}

export default Header