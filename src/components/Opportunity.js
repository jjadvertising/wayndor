import React from "react";
import Spline from '@splinetool/react-spline';
import Navbar from './Navbar'
import { Box,Heading,Image,Flex,Spacer,Text, Button,Show } from "@chakra-ui/react";
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon} from '@chakra-ui/react'
function Opportunity(){
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
    e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
    }

    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; return 0 } 
    }));
    } catch(e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // call this to Disable
    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    // call this to Enable
    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    const para =[{
        image:'https://raw.githubusercontent.com/jjadvertising/wayndor-website-content/main//img_1.jpg',
        des:'Join our team at Wayndor.com and help revolutionize the vegetable vendor industry in India! We are a startup dedicated to empowering local street vendors with our technology solutions, designed to improve their profitability and build sustainable businesses. We are looking for motivated and skilled individuals who share our vision of making a positive impact on this important industry.'
    },{
        image:'https://raw.githubusercontent.com/jjadvertising/wayndor-website-content/main/img_2.png',
        des:'As a member of our team, you will have the opportunity to work in a fast-paced and dynamic startup environment, where you can grow your skills and make a real impact. We believe in collaboration, creativity, and a willingness to take risks and learn from failure.'
    },{
        image:'https://raw.githubusercontent.com/jjadvertising/wayndor-website-content/main/img_3.png',
        des:'We are looking for individuals who are passionate about our mission and are excited about the potential of our startup. Whether you are a college student or working professional, we welcome anyone who wants to be a part of our growing team. We understand that salary may not be the most important factor at the starting stage, but we are offering competitive compensation packages.'
    },{
        image:'https://raw.githubusercontent.com/jjadvertising/wayndor-website-content/main/img_4.png',
        des:'Key responsibilities include [specific tasks/areas of focus], and we encourage candidates to bring new ideas and perspectives to the table. We are committed to building a diverse and inclusive team and welcome applications from candidates of all backgrounds and experiences.'
    },{
        image:'https://raw.githubusercontent.com/jjadvertising/wayndor-website-content/main/img_5.png',
        des:"This role can be part-time, making it perfect for college students or working professionals who are interested in working with us. If you're ready to be a part of a startup that's changing the industry and potentially becoming India's next unicorn, we would love to hear from you. Please submit your resume and a brief cover letter outlining why you're interested in working with us."
    }]
    return <>
        <Navbar/>
        <Box p={10}>
            <Flex alignItems={'center'}>
                <Image src="https://raw.githubusercontent.com/jjadvertising/wayndor-website-content/main/v9.png" fit='contain' boxSize={'150px'} />
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
            <Accordion allowToggle defaultIndex={1}>
                <AccordionItem>
                    <AccordionButton p={5}>
                        <Box as="span" flex='1' textAlign='left'>
                    <Heading size={'lg'}>
                    What are we seeking in applicants?
                    </Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
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
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton p={5}>
                        <Box as="span" flex='1' textAlign='left'>
                    <Heading size={'lg'}>
                    Which technologies are we working on?
                    </Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Flex m={5} flexDirection={{base:'column',md:'row'}} align={'center'}>
                            <Spacer/>
                            <Show above="md">
                                <Spline onMouseOver={disableScroll} onMouseOut={enableScroll} scene="https://prod.spline.design/yXbHwJxDBmavU03T/scene.splinecode" style={{marginTop:'2rem',height:'20rem',width:'25rem',borderRadius:'1px',boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}/>
                            </Show>
                            <Spacer/>
                            <Flex flexDirection={'column'} maxWidth={'30rem'}>
                                <Heading>Software and Application</Heading>
                                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur facilis, et omnis rem incidunt hic deserunt quidem? Delectus beatae fugiat dolorem vel doloremque dolores, aliquid fuga. Ea itaque consectetur quos?</Text>
                            </Flex>
                            <Spacer/>
                            <Button mt={3} colorScheme="green">Apply</Button>
                            <Spacer/>
                        </Flex>
                        <Flex m={5} flexDirection={{base:'column',md:'row'}} align={'center'}>
                            <Spacer/>
                            <Show above="md">
                            <Spline onMouseOver={disableScroll} onMouseOut={enableScroll} scene="https://prod.spline.design/311nVQrPZo6OkdSD/scene.splinecode" style={{marginTop:'2rem',height:'20rem',width:'25rem',borderRadius:'1px',boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}/>
                            </Show>
                            <Spacer/>
                            <Flex flexDirection={'column'} maxWidth={'30rem'}>
                                <Heading>Hardware</Heading>
                                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur facilis, et omnis rem incidunt hic deserunt quidem? Delectus beatae fugiat dolorem vel doloremque dolores, aliquid fuga. Ea itaque consectetur quos?</Text>
                            </Flex>
                            <Spacer/>
                            <Button mt={3} colorScheme="green">Apply</Button>
                            <Spacer/>
                        </Flex>
                        <Flex m={5} flexDirection={{base:'column',md:'row'}} align={'center'}>
                            <Spacer/>
                            <Show above="md">
                            <Spline onMouseOver={disableScroll} onMouseOut={enableScroll} scene="https://prod.spline.design/IUxuJHSbBDGdUFic/scene.splinecode" style={{marginTop:'2rem',height:'20rem',width:'25rem',borderRadius:'1px',boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}/>
                            </Show>
                            <Spacer/>
                            <Flex flexDirection={'column'} maxWidth={'30rem'}>
                                <Heading>Cloud</Heading>
                                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur facilis, et omnis rem incidunt hic deserunt quidem? Delectus beatae fugiat dolorem vel doloremque dolores, aliquid fuga. Ea itaque consectetur quos?</Text>
                            </Flex>
                            <Spacer/>
                            <Button mt={3} colorScheme="green">Apply</Button>
                            <Spacer/>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
                </Accordion>
            
        </Box>
        <Box>
        </Box>
    </>
}

export default Opportunity