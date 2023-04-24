import React, { useState } from 'react'
import {Modal,ModalOverlay,ModalContent,ModalFooter,ModalBody,Button,Image,Flex,Text, Spacer, Box, Input  } from '@chakra-ui/react'
import { LocationOnFontIcon,PhoneFontIcon,EmailFontIcon } from "@react-md/material-icons";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FormControl,FormErrorMessage} from '@chakra-ui/react'
import './smtp.js'
function ContactUs({isOpen,onClose}) {
    const [err,setErr] = useState({
      boolean:false,
      error:''
    })
    const [input,setInput]=useState({
      name:'',
      email:'',
      description:''
    })
    function checkEmail(e) {
      changeInput(e)
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if(e.target.value.match(pattern)){
        setErr({
          boolean:false,
          error:''
        })
      }else{
        setErr({
          boolean:true,
          error:'Invalid Email'
        })
      }
    }
    function changeInput(e) {
      setInput({
        ...input,
        [e.target.name]:e.target.value
      })
    }
    function submitData(params) {

      // const client = new SMTPClient({
      //   user: 'user',
      //   password: 'password',
      //   host: 'smtp.your-email.com',
      //   ssl: true,
      // });
    }
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
                <a target='_blank' rel='noreferrer' href='tel:1234567890'>
              <Flex p={2} flexDirection={'column'} alignItems={'center'} width={'140px'}>
                <PhoneFontIcon/>
                  <Text fontSize={'sm'}>+91 1234567890</Text>
              </Flex> 
                  </a>
              <Spacer/>
            </Flex>
            <hr/>
            <Flex>
              <Spacer/>
                <a target='_blank' rel='noreferrer' href='mailto:dummy@wayndor.com'>
              <Flex p={2} flexDirection={'column'} alignItems={'center'} width={'140px'}>
                <EmailFontIcon/>
                  <Text fontSize={'sm'}>dummy@wayndor.com</Text>
              </Flex> 
                  </a>
              <Spacer/>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/company/wayndor/'>
              <Flex p={2} flexDirection={'column'} alignItems={'center'} width={'140px'}>
                <LinkedInIcon/>
                  <Text fontSize={'sm'}>Wayndor</Text>
              </Flex> 
                  </a>
              <Spacer/>
            </Flex>
          <ModalBody>
            <Flex alignItems={'center'}>
              <Image src="./Image/v2.png" fit='contain' boxSize={'150px'} />
              <Spacer/>
              <Box>
                <FormControl mb={5} isRequired>
                  <Input onChange={changeInput} type='text' name='name' placeholder='Enter Your Name'/>
                </FormControl>
                <FormControl mb={5} isInvalid={err.boolean} isRequired>
                  <Input type='email' onChange={checkEmail} name='email' placeholder='Email Address' />
                  <FormErrorMessage>{err.error}</FormErrorMessage>
                </FormControl>
                <FormControl  isRequired>
                  <Input onChange={changeInput} type='text' name='description' placeholder='Enter Inquiry' height={'70px'}/>
                </FormControl>
              </Box>
              <Spacer/>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={submitData}>Send</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>)
}

export default ContactUs