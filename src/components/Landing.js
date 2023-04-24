import { Show,Box,Text,Flex,Image, Spacer,Button,useDisclosure } from "@chakra-ui/react";
import React,{useState} from "react";
import { Navigate,Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import logo from '../logo.svg';
import ContactUs from "./ContactUs";
import ReactTextTransition from "react-text-transition";

function Landing(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [paragraphIndex, setParagraphIndex] = useState(0);
    const images = [
        "./Image/vegetable-seller-4.jpeg",
        "./Image/vegetable-seller-2.jpeg",
        "./Image/vegetable-seller-3.jpeg",
    ];
    const paragraphs = [['Chacha ke Vyapar ka ','naya adhar'],['Bhaiya ke Vyapar ke liye ','nayi soch'],['Is Vyapar me hum apke ','sath hain']]
    const page = [['Home','/home'],['About','/about'],['Opportunity','/opportunity']]
    return <>
        <Show below='md'>
            <Navigate to='/home'/>
        </Show>
        <Box position={'absolute'} width={'100vw'} height={'90vh'} p={10} zIndex={0} bgColor={'black'} >
        </Box>
        {/* <Box position={'absolute'} width={'100vw'} height={'90vh'} p={10}  > */}
            <Box mt={'20vh'} position={'absolute'} ml={'36vw'} zIndex={4}>
                <React.Fragment >
                    <ReactTextTransition className="big">
                        <Flex>
                            <Text variant={'new'} fontSize={'4xl'} w='600px' p={3} align={'right'} colorScheme="white" color={'white'}>
                                {paragraphs[paragraphIndex%3][0]}
                            </Text>
                            <Text fontSize={'4xl'}  p={3} align={'right'} colorScheme="white" color={'white'} bgColor={'#e2312b'}>
                                {paragraphs[paragraphIndex%3][1]}
                            </Text>
                        </Flex>
                    </ReactTextTransition>
                </React.Fragment>
            </Box>
        {/* </Box> */}
        <Box position={'absolute'} width={'100vw'} p={10} zIndex={2} bgColor={'black'} opacity={0.3}></Box>
        <Box position={'absolute'} width={'100vw'} p={1} zIndex={3} >
        <Flex alignItems={'center'} >
            <Spacer/>
            <Image src={logo} style={{width:'100px'}}/>
            <Text fontSize='3xl' color={'#ed9213'}>Wayndor</Text>
            <Spacer/>
        </Flex>
        </Box>
        <SimpleImageSlider
        width={'100vw'}
        height={'90vh'}
        images={images}
        autoPlay={true}
        slideDuration={0.5}
        style={{opacity:0.7}}
        onStartSlide={(idx)=>{
            setParagraphIndex(idx-1)
        }}  
      />
        <Flex flexDirection={'column'} justifyContent={'center'} height={'10vh'}> 
            <Flex alignItems={'center'}>
            <Spacer/>
            {page.map((e)=>{
                return <>
                <Link to={e[1]} >
                    <Button colorScheme="green" variant={'ghost'}>{e[0]}</Button>
                </Link>
                <Spacer/>
                </>
            })}
                <Button colorScheme="green" variant={'ghost'} onClick={onOpen} >Contact Us</Button>
                <Spacer/>
            </Flex>
        </Flex>
        <ContactUs isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
    </>
}

export default Landing