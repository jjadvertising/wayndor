import { Show,Box,Text,Flex,Image, Spacer,Button,useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Navigate,Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import logo from '../logo.svg';
import ContactUs from "./ContactUs";

function Landing(){
  const { isOpen, onOpen, onClose } = useDisclosure()
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
    const page = [['Home','/home'],['About','/about'],['Opportunity','/opportunity']]
    return <>
        <Show below='md'>
            <Navigate to='/home'/>
        </Show>
        <Box position={'absolute'} width={'100vw'} p={10} zIndex={2} bgColor={'white'} opacity={0.6}></Box>
        <Box position={'absolute'} width={'100vw'} p={1} zIndex={3} >
        <Flex alignItems={'center'} >
            <Spacer/>
            <Image src={logo} style={{width:'100px'}}/>
            <Text fontSize='3xl' color={'#ed9213'}>Wayndor</Text>
            <Spacer/>
        </Flex>
        </Box>
        <SimpleImageSlider
        width={'100vw'}
        height={'90vh'}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={0.5}
      />
        <Flex flexDirection={'column'} justifyContent={'center'} height={'10vh'}> 
            <Flex alignItems={'center'}>
            <Spacer/>
            {page.map((e)=>{
                return <>
                <Link to={e[1]} >
                    <Button colorScheme="green" variant={'ghost'}>{e[0]}</Button>
                </Link>
                <Spacer/>
                </>
            })}
                <Button colorScheme="green" variant={'ghost'} onClick={onOpen} >Contact Us</Button>
                <Spacer/>
            </Flex>
        </Flex>
        <ContactUs isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
    </>
}

export default Landing