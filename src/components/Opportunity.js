import React from "react";
import Navbar from './Navbar'
import { Box,Heading,Image,Flex,Spacer,Text } from "@chakra-ui/react";


function Opportunity(){
    return <>
        <Navbar/>
        <Box p={10}>
            <Flex alignItems={'center'}>
                <Image src="./Image/v9.png" fit='contain' boxSize={'150px'} />
                {/* <Spacer/> */}
                <Heading>Heading</Heading>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
            </Flex>
            <Text align={'justify'}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore corporis aut, velit perferendis ea ipsum iste officiis maxime harum veritatis laborum, vero quis neque deleniti quaerat numquam iure! In, modi. </Text>
        </Box>
        <Box>
            
        </Box>
    </>
}

export default Opportunity