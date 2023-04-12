import React, { useEffect } from "react";
import Spline from '@splinetool/react-spline';
import { Box, Flex, Spacer,Spinner,useDisclosure,Center, Show } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody

  } from '@chakra-ui/react'
function HomePage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
        onOpen()
        setTimeout(()=>onClose(),2000)
    },[])
    return <><Flex>
        <Spacer/>
    <Show above="md">
    <Spline scene="https://prod.spline.design/FXwKsjat9S99IPIQ/scene.splinecode" style={{marginTop:'2rem',height:'30rem',width:'40rem'}} />
    <Modal isOpen={isOpen} onClose={onClose} size='full'>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Center>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
      </Show>
    <Spacer/>
    <Box style={{height:'30rem',width:'40rem'}}> askjdhas</Box>
    </Flex>
    </>
}

export default HomePage