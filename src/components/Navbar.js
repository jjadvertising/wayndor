import { Box, Flex,Image, Spacer,Button,Text,Show, Hide } from "@chakra-ui/react"
import logo from '../logo.svg';
import {Drawer, DrawerBody,useDisclosure, DrawerOverlay,DrawerContent} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import React from "react";
import { DehazeFontIcon } from "@react-md/material-icons";
import ContactUs from "./ContactUs";

function Navbar() {
    const page = [['Home','/home'],['About','/about'],['Opportunity','/opportunity']]
    const url = window.location.pathname
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen : isOpen1,onOpen : onOpen1, onClose : onClose1 } = useDisclosure()
    const btnRef = React.useRef()
    return (
    <Box p={2}>
        <ContactUs isOpen={isOpen1} onClose={onClose1} onOpen={onOpen1}/>
        <Flex align='center'>
            <Spacer/>
            <Box>
                <Show above="md">
                    <Link to='/'>
                        <Flex alignItems={'center'}>
                            <Image src={logo} style={{width:'100px'}}/>
                            <Text fontSize='3xl' color={'#ed9213'}>Wayndor</Text>
                        </Flex>
                    </Link>
                </Show>
                <Show below="md">
                    <Flex alignItems={'center'}>
                        <Image src={logo} style={{width:'100px'}}/>
                        <Text fontSize='3xl' color={'#ed9213'}>Wayndor</Text>
                    </Flex>
                </Show>
            </Box>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Show above="md">
                {page.map((e)=>{
                    return <>
                    <Link key={e[0]} to={e[1]} >
                        <Button colorScheme="green" variant={url===(e[1])?'solid':'ghost'}>{e[0]}</Button>
                    </Link>
                    <Spacer/>
                    </>
                })}
                <Button colorScheme="green" variant={'ghost'} onClick={onOpen1}>Contact Us</Button>
                <Spacer/>
            </Show>
            <Hide above="md">
                <Button ref={btnRef} colorScheme='green' onClick={onOpen}>
                    <DehazeFontIcon/>
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size={'xs'}
                >
                    <DrawerOverlay />
                    <DrawerContent onClick={onClose}>
                    <DrawerBody>

                    {page.map((e)=>{
                        return <Box>
                        <Link  key={e[0]} to={e[1]} >
                            <Button marginBottom={4} colorScheme="green"  variant={url===(e[1])?'solid':'ghost'} size={'md'}>{e[0]}</Button>
                        </Link>
                        </Box>
                    })}                    
                    <Box>
                        <Button colorScheme="green" variant={'ghost'} onClick={onOpen1}>Contact Us</Button>
                    </Box>
                    </DrawerBody>

                    </DrawerContent>
                </Drawer>
            </Hide>
        </Flex>
    </Box>)
}
export default Navbar