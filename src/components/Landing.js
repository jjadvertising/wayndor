import { Show,Box,Text,Flex,Image, Spacer,Button,useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Navigate,Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import logo from '../logo.svg';
import ContactUs from "./ContactUs";

function Landing(){
  const { isOpen, onOpen, onClose } = useDisclosure()
    const images = [
        "./Image/vegetable-seller-3.jpeg",
        "./Image/vegetable-seller-4.jpeg",
        "./Image/vegetable-seller-2.jpeg",
    ];
    const page = [['Home','/home'],['About','/about'],['Opportunity','/opportunity']]
    return <>
        <Show below='md'>
            <Navigate to='/home'/>
        </Show>
        <Box position={'absolute'} width={'100vw'} height={'90vh'} p={10} zIndex={0} bgColor={'black'} ></Box>
        <Box position={'absolute'} width={'100vw'} p={10} zIndex={2} bgColor={'black'} opacity={0.3}></Box>
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
        style={{opacity:0.7}}
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