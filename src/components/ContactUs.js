import React, { useState } from 'react'
import {Modal,ModalOverlay,ModalContent,ModalFooter,ModalBody,Button,Image,Flex,Text, Spacer, Box, Input,Alert,AlertIcon  } from '@chakra-ui/react'
import { LocationOnFontIcon,PhoneFontIcon,EmailFontIcon } from "@react-md/material-icons";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FormControl,FormErrorMessage} from '@chakra-ui/react'
import Email from './smtp.js'
function ContactUs({isOpen,onClose}) {
    const [alert,setAlert] = useState({success:false,error:false,input:false})
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
      if(alert.success){
        setAlert({
          ...alert,
          error:false,
          input:false
        })
        return 
      }
      if(input.name!==''&&input.email!==''&&input.description!==''){
        setAlert({
          ...alert,
          input:false
        })
        Email.send({
          Host : "smtp.elasticemail.com",
          Username : "justjugaadadvertising@gmail.com",
          Password : "61F138F5352E4A74118E0DED021B97094409",
          To : '<sanketsapatevnit@gmail.com>,<er.sarthakkale@gmail.com>',
          From : `${input.name}<justjugaadadvertising@gmail.com>`,
          Subject : `New Enquiry from ${input.name}`,
          Body : `Name : ${input.name}<br> Email : ${input.email} <br> Query : ${input.description}`
        }).then(
          setAlert({
            error:false,
            input:false,
            success:true
          })
        ).catch((e)=>{
          console.log(e)
          setAlert({
            ...alert,
            success:false,
            error:true
          })
        }
        )
      }
      else{
        setAlert({
          success:false,
          error:false,
          input:true
        })
      }
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
              <Image src="https://raw.githubusercontent.com/jjadvertising/wayndor-website-content/main/v2.png" fit='contain' boxSize={'150px'} />
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
            <Button variant='ghost'  mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' variant={input.name!==''&&input.email!==''&&input.description!==''?'solid':'ghost'} onClick={submitData} >Send</Button>
          </ModalFooter>
          {alert.success?<Alert borderBottomRadius={5} status='success' variant='subtle'>
            <AlertIcon />
            Enquiry forwarded to the Team
          </Alert>:''}
          {alert.error?<Alert borderBottomRadius={5} status='error' variant='subtle'>
            <AlertIcon />
            Failed. Please try again later!
          </Alert>:''}
          {alert.input?<Alert borderBottomRadius={5} status='error' variant='subtle'>
            <AlertIcon />
            Please fill all fields! 
          </Alert>:''}
        </ModalContent>
      </Modal>
    </>)
}

export default ContactUs