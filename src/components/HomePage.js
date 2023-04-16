import React, { useEffect } from "react";
import Spline from '@splinetool/react-spline';
import { Box, Flex, Spacer,Spinner,useDisclosure,Center,Text, Show,Tab,Tabs,TabPanel,TabList,TabPanels, Heading, CircularProgress } from "@chakra-ui/react";
import {Modal, ModalOverlay, ModalContent, ModalBody} from '@chakra-ui/react'
import { ReportProblemFontIcon } from "@react-md/material-icons";
function HomePage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
        onOpen()
        setTimeout(()=>onClose(),2000)
    },[onOpen,onClose])
    let problems = [{
      heading : 'Lack of Access to Capital :',
      describe : 'Many local vegetable vendors operate on a small scale and lack access to formal financial services. This makes it difficult for them to obtain loans or credit to invest in their businesses or expand their operations.' 
    },{
      heading: 'Unpredictable Demand and Seasonal Variations :',
      describe :'Local vegetable vendors often face unpredictable demand for their products, which makes it difficult to plan their inventory and pricing. They also face seasonal variations in the availability of produce, which can impact their ability to earn a steady income.'
    },{
      heading: 'Competition from Supermarkets and Online Retailers :',
      describe :'Local vegetable vendors face intense competition from supermarkets and online retailers, who often offer lower prices and a wider range of products. This makes it difficult for local vendors to compete on price and maintain their customer base.'
    },{
      heading: 'Lack of Infrastructure and Technology :',
      describe :'Many local vegetable vendors operate in informal markets and lack basic infrastructure such as storage facilities, transportation, and technology. This limits their ability to store and transport produce, and also makes it difficult for them to access new markets.'
    },{
      heading: 'Regulatory Issues and Bureaucracy :',
      describe :'Local vegetable vendors often face bureaucratic hurdles and regulatory issues related to licensing, permits, and taxes. These issues can be time-consuming and expensive to navigate, and can often result in corruption and harassment by local officials.'
    }]
    let vendor = [{heading:'No. of Vendors', percent:60,des:'~ 4 Million',color:'green'},{heading:'Youngseter Involved', percent:40,des:'40% Under 30 Age',color:'orange'},{heading:'Average Economical Status', percent:10,des:'6-7k per month',color:'red'}]
    return <><Flex>
        <Spacer/>
    <Show above="md">
    <Spline scene="https://prod.spline.design/FXwKsjat9S99IPIQ/scene.splinecode" style={{marginTop:'2rem',height:'30rem',width:'40rem',borderRadius:'1px',boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}} />
    <Modal isOpen={isOpen} onClose={onClose} size='full'>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Center >
            <Spinner
                style={{padding:'30px',marginTop:'40vh'}}
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
    <Box p={3} style={{height:'30rem',width:'40rem'}}> 
    <Flex flexDirection={'column'} style={{height:'30rem'}}>
      <Box >
        {/* <Heading>Vendor</Heading> */}
        <Flex>
          {vendor.map((e,i)=>{
            return <><Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
              <Text as='b'>{e.heading}</Text>
            <CircularProgress value={e.percent} color={e.color} size='80px'/>
            <Text>{e.des}</Text>
            </Flex>
            <Spacer/>
            </>
          })}
        </Flex>
      </Box>
      <Spacer/>
      <Box>
        <Heading>Major Problems</Heading>
        <Tabs paddingTop={2} isFitted variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
            <Tab>Four</Tab>
            <Tab>Five</Tab>
          </TabList>
          <TabPanels>
            {problems.map((e)=>{
              return <TabPanel>
              <Flex alignItems={'center'}>
                <ReportProblemFontIcon/>
                <Text as='u' marginLeft={1}>{e.heading}</Text>
              </Flex>
              <Text>{e.describe}</Text>
            </TabPanel>
            })}
          </TabPanels>
        </Tabs>
      </Box>
      <Spacer/>
      <Box>
        <Heading>What Are We Doing</Heading>
            <Text>"We are a startup called Wayndor.com, specializing in the vegetable vendor industry. Our technology solutions are designed to assist local street vendors in overcoming challenges, improving profitability, and building sustainable businesses."</Text>    
      </Box>
    </Flex>
    </Box>
    </Flex>
    </>
}

export default HomePage