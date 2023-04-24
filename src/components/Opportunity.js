import React from "react";
import Navbar from './Navbar'
import { Box,Heading,Image,Flex,Spacer,Text, } from "@chakra-ui/react";

function Opportunity(){
    const para =[{
        image:'./img/img 1.jpg',
        des:'Join our team at Wayndor.com and help revolutionize the vegetable vendor industry in India! We are a startup dedicated to empowering local street vendors with our technology solutions, designed to improve their profitability and build sustainable businesses. We are looking for motivated and skilled individuals who share our vision of making a positive impact on this important industry.'
    },{
        image:'./img/img 2.png',
        des:'As a member of our team, you will have the opportunity to work in a fast-paced and dynamic startup environment, where you can grow your skills and make a real impact. We believe in collaboration, creativity, and a willingness to take risks and learn from failure.'
    },{
        image:'./img/img 3.png',
        des:'We are looking for individuals who are passionate about our mission and are excited about the potential of our startup. Whether you are a college student or working professional, we welcome anyone who wants to be a part of our growing team. We understand that salary may not be the most important factor at the starting stage, but we are offering competitive compensation packages.'
    },{
        image:'./img/img 4.png',
        des:'Key responsibilities include [specific tasks/areas of focus], and we encourage candidates to bring new ideas and perspectives to the table. We are committed to building a diverse and inclusive team and welcome applications from candidates of all backgrounds and experiences.'
    },{
        image:'./img/img 5.png',
        des:"This role can be part-time, making it perfect for college students or working professionals who are interested in working with us. If you're ready to be a part of a startup that's changing the industry and potentially becoming India's next unicorn, we would love to hear from you. Please submit your resume and a brief cover letter outlining why you're interested in working with us."
    }]
    return <>
        <Navbar/>
        <Box p={10}>
            <Flex alignItems={'center'}>
                <Image src="./Image/v9.png" fit='contain' boxSize={'150px'} />
                {/* <Spacer/> */}
                <Heading>Join our innovative and dynamic startup team!</Heading>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
            </Flex>
            {para.map((e,i)=>{
                return <Box key={i} marginTop={10}>
                    <Flex flexDirection={{md:'row',base:'column'}} alignItems={'center'} >
                        <Flex flexDirection={'column'} height={'230px'}>
                            <Image src={e.image} boxSize={'200px'}/>
                            <Spacer/>
                            <a target="_blank" rel="noreferrer" href='https://www.fotor.com/features/ai-image-generator/'><Text align={'right'} fontSize={10}>AI generated</Text></a>
                            <Spacer/>
                            <hr/>
                        </Flex>
                        <Spacer/>
                        <Text align={'justify'} maxWidth={'70vw'}>{e.des}</Text>
                    </Flex>
                </Box>
            })}
        </Box>
        <Box>
        </Box>
    </>
}

export default Opportunity