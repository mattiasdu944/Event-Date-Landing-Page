import { useRef } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    List,
    ListItem,
    Text,
    Grid,
    Flex
} from '@chakra-ui/react'
import { nav_links } from '../../constants/constants'

const DrawerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <>
            <Button ref={btnRef} onClick={onOpen}>
                <AiOutlineMenu />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent  backdropFilter='auto' bgBlendMode='color' bgColor='blackAlpha.700' backdropBlur='5px'>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Text
                            fontWeight={800}
                            bgGradient='linear(to-l,  orange_ligth,orange)'
                            bgClip='text'
                            fontSize='2xl'
                        >
                            Event Date
                        </Text>
                    </DrawerHeader>

                    <DrawerBody>

                        <List>
                            <Grid gap={3}>
                                {nav_links.map(enlace =>
                                    <ListItem fontSize='lg' key={enlace.path}>
                                        <a href={enlace.path}>{enlace.name}</a>
                                    </ListItem>
                                )}
                            </Grid>
                                <ListItem mt={5}>
                                    <Flex gap={4}>

                                    <Button color='orange' variant='link'>
                                        Iniciar Sesion
                                    </Button>
                                    <Button color="orange" variant='outline'>
                                        Registrarse
                                    </Button>
                                    </Flex>
                                </ListItem>
                        </List>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerMenu