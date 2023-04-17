import { Box, Flex,Image, Spacer,Button,Text,Show, Hide } from "@chakra-ui/react"
import logo from '../logo.svg';
import {Drawer, DrawerBody,useDisclosure, DrawerOverlay,DrawerContent,DrawerCloseButton} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import React,{  useState } from "react";
import { DehazeFontIcon } from "@react-md/material-icons";


function Navbar(params) {
    const [abc,setAbc] = useState(1)
    const page = [['Home','/'],['About','/about'],['Opportunity','/opportunity']]
    const url = window.location.pathname
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
    <Box p={2}>

        <Flex align='center'>
            <Spacer/>
            <Box>
                <Flex alignItems={'center'}>
                <Image src={logo} style={{width:'100px'}}/>
                <Text fontSize='3xl' color={'#ed9213'}>Wayndor</Text>
                </Flex>
            </Box>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Show above="md">
                {page.map((e)=>{
                    return <>
                    <Link key={e[0]} to={e[1]} onClick={()=>{setAbc((prev)=>prev+1)}}>
                        <Button colorScheme="green" abc={abc} variant={url===(e[1])?'solid':'ghost'}>{e[0]}</Button>
                    </Link>
                    <Spacer/>
                    </>
                })}
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
                    <DrawerContent >
                    <DrawerCloseButton size={'lg'} />

                    <DrawerBody>

                    {page.map((e)=>{
                        return <Box>
                        <Link  key={e[0]} to={e[1]} onClick={()=>{setAbc((prev)=>prev+1); onClose()}}>
                            <Button marginBottom={4} colorScheme="green" abc={abc} variant={url===(e[1])?'solid':'ghost'} size={'md'}>{e[0]}</Button>
                        </Link>
                        </Box>
                    })}
                    </DrawerBody>

                    </DrawerContent>
                </Drawer>
            </Hide>
        </Flex>
    </Box>)
}
export default Navbar