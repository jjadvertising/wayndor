import React from 'react'
import {Modal,ModalOverlay,ModalContent,ModalFooter,ModalBody,Button,Image,Flex,Text, Spacer, Box, Input, FormLabel  } from '@chakra-ui/react'
import { LocationOnFontIcon,PhoneFontIcon,EmailFontIcon } from "@react-md/material-icons";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FormControl,FormErrorMessage} from '@chakra-ui/react'
function ContactUs({isOpen,onClose}) {
    return (<>
      <Modal size={'lg'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <Flex> 
              <Spacer/>
              <Flex p={2} flexDirection={'column'} alignItems={'center'} width={'140px'}>
                <LocationOnFontIcon/>
                <Text fontSize={'sm'}>Nagpur</Text>
              </Flex> 
              <Spacer/>
              <Flex p={2} flexDirection={'column'} alignItems={'center'} width={'140px'}>
                <PhoneFontIcon/>
                <a href='tel:1234567890'><Text fontSize={'sm'}>+91 1234567890</Text></a>
              </Flex> 
              <Spacer/>
            </Flex>
            <hr/>
            <Flex>
              <Spacer/>
              <Flex p={2} flexDirection={'column'} alignItems={'center'} width={'140px'}>
                <EmailFontIcon/>
                <a href='mailto:dummy@wayndor.com'><Text fontSize={'sm'}>dummy@wayndor.com</Text></a>
              </Flex> 
              <Spacer/>
              <Flex p={2} flexDirection={'column'} alignItems={'center'} width={'140px'}>
                <LinkedInIcon/>
                <a href='linkedin.com/wayndor'><Text fontSize={'sm'}>Wayndor</Text></a>
              </Flex> 
              <Spacer/>
            </Flex>
          <ModalBody>
            <Flex alignItems={'center'}>
              <Image src="./Image/v2.png" fit='contain' boxSize={'150px'} />
              <Spacer/>
              <Box>
                <FormControl mb={5} isRequired>
                  <Input type='text' placeholder='Enter Your Name'/>
                </FormControl>
                <FormControl mb={5} isInvalid={true} isRequired>
                  <Input type='email' placeholder='Email Address'/ >
                  <FormErrorMessage>Invalid Email</FormErrorMessage>
                </FormControl>
                <FormControl  isRequired>
                  <Input type='text' placeholder='Enter Inquiry' height={'70px'}/>
                </FormControl>
              </Box>
              <Spacer/>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Semd</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>)
}

export default ContactUs