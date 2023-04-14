import { Box, Flex,Image, Spacer,Button,Text } from "@chakra-ui/react"
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import {  useState } from "react";


function Navbar(params) {
    const [abc,setAbc] = useState(1)
    const page = [['Home','/'],['About','/about'],['Opportunity','/opportunity']]
    const url = window.location.pathname
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
            
            {page.map((e)=>{
                return <>
                <Link key={e[0]} to={e[1]} onClick={()=>{setAbc((prev)=>prev+1)}}>
                    <Button colorScheme="green" abc={abc} variant={url===(e[1])?'solid':'ghost'}>{e[0]}</Button>
                </Link>
                <Spacer/>
                </>
            })}
        </Flex>
    </Box>)
}
export default Navbar