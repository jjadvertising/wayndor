import { Box, Flex,Image, Spacer,Button,Text } from "@chakra-ui/react"
import logo from '../logo-b.gif';
import { Link } from "react-router-dom";


function Navbar(params) {
    return (
    <Box p={2}>
        <Flex align='center'>
            <Spacer/>
            <Box>
                <Image src={logo} boxSize='60px'/>
            </Box>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Link to='/'>
                <Button colorScheme="green" variant='solid'>Home</Button>
            </Link>
            <Spacer/>
            <Link to='/about'>
                <Button colorScheme="green" variant='ghost'>About Us</Button>
            </Link>
            <Spacer/>
            <Link to='/opportunity'>
                <Button colorScheme="green" variant='ghost'>Opportunity</Button>
            </Link>
            <Spacer/>
        </Flex>
    </Box>)
}
export default Navbar