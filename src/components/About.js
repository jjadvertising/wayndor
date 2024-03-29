import { Box,Heading,Text,SimpleGrid,Card,CardBody,CardFooter,Image,Flex, Spacer,Show,Accordion,AccordionButton,AccordionItem,AccordionIcon,AccordionPanel } from "@chakra-ui/react";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Navbar from './Navbar'

function About(params) {
    let team=[{
        name:'Sarthak Kale',
        image:'Sarthak.jpeg',
        instagram:'https://www.instagram.com/sarthakkale_/',
        linkedin:'https://www.linkedin.com/in/kalesarthak'
    },{
        name:'Sanket Sapate',
        image:'Sanket.jpeg',
        instagram:'https://www.instagram.com/s._.sapate/',
        linkedin:'https://www.linkedin.com/in/sanket-sapate-205a22183'
    },{
        name:'Shritish Shete',
        image:'Shritish.jpg',
        instagram:'https://www.instagram.com/shritish.shete/',
        linkedin:'https://www.linkedin.com/in/shritish-shete'
    }]
    return <> 
    <Navbar/>
    <Box p={5} paddingBottom={0}>
    </Box>
    <Box p={10} paddingTop={7}>

        <Box>
            <Flex flexDirection={'row'} alignItems={'center'}>
                <Image src="https://raw.githubusercontent.com/jjadvertising/wayndor-website-content/main/v4.png" fit='contain' boxSize={'150px'} />
                <Heading marginBottom={4}>
                        Timeline
                </Heading>
            
            </Flex>
            <Show above='md'>
                <Box>
                    <Flex alignItems={'center'}>
                        <Heading  minWidth={'150px'}>2018-19</Heading>
                        <Spacer/>
                        <Text maxWidth={'500px'} align={'justify'}>Our founder (Sarthak) has been working on this idea since his first year of engineering in 2018-19. Initially, the idea was basic and raw, aiming to connect vegetable shopkeepers on a single platform similar to Big Basket. He created a platform and successfully onboarded four vegetable shopkeepers.</Text>
                        <Spacer/>
                        <Image boxSize={'300px'} src="https://images.unsplash.com/flagged/photo-1681659159534-ae649100424e" />
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Image boxSize={'300px'} src="https://images.unsplash.com/flagged/photo-1681658993222-563e3939d6c4" />
                        <Spacer/>
                        <Text maxWidth={'500px'} align={'justify'}>However, in his second year, he realized that the real problem was with the cart used by vegetable vendors. He then developed a vegetable vendor cart with an electric motor and slider to hold the vegetable basket, but the manufacturing cost was not affordable for the vendors, leading to the idea being dropped. He discussed this with his college senior, who suggested creating a scalable business model that introduces technology and impacts both the consumer and vendor levels.</Text>
                        <Spacer/>
                        <Heading  minWidth={'150px'}>2019-20</Heading>
                    </Flex>
                    <Flex align={'center'}>
                        <Heading  minWidth={'150px'}>2020-21</Heading>
                        <Spacer/>
                        <Text maxWidth={'500px'} align={'justify'}>During the pandemic in his third year (2020), he had ample time to critically analyze the model, learn from past mistakes, and create a solution to organize the unorganized sector of vegetable vendors and minimize their problems. He also identified burning problems faced by consumers of vegetable vendors and came up with a tech-based solution to connect both the vendor and consumer sides efficiently. He discussed this idea with his friend Sanket from NIT-Nagpur, who became his co-founder, and they started a small company called JJ Advertising Agency.</Text>
                        <Spacer/>
                        <Image boxSize={'300px'} src="https://images.unsplash.com/flagged/photo-1681665808996-52fbf3375599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" fit={'contain'} />
                    </Flex>
                    <Flex align={'center'}>
                        <Image boxSize={'300px'} src="https://images.unsplash.com/flagged/photo-1681666033822-7ffadafc32e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" fit={'contain'} />
                        <Spacer/>
                        <Text maxWidth={'500px'} align={'justify'}>JJ Advertising Agency devised a new advertising method that allows enterprises to effectively advertise their products at a lower cost. The motivation behind starting this company was to conduct market analysis, test the acceptance ratio of new ideas, develop a minimum viable product (MVP), and run a pilot project to gain a better understanding of the market for their big startup plans.</Text>
                        <Spacer/>
                        <Heading>2021-22</Heading>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Heading>2022-23</Heading>
                        {/* <iframe width="180" height="315"  src="http://www.youtube.com/embed/dURrqFasAnA?autoplay=1&loop=1&showinfo=0"></iframe> */}
                        <Spacer/>
                        <Text maxWidth={'500px'} align={'justify'}>Later, they were joined by co-founders Shritish, known for his multitasking abilities and out-of-the-box thinking, as well as team members Vipul, Mansi, Hritika, Nayan and Rushikesh. In 2022, due to most team members being in their final year of college and having job offers in hand, they decided to pause all operations and gain corporate experience first before coming back together after a period of time, possibly a year, to resume their startup plans. However, founder Sarthak continued working on the Wayndor project with Sanket.</Text>
                        <Spacer/>
                        <Image boxSize={'300px'} src="https://images.unsplash.com/flagged/photo-1681664036682-26abfaafc0c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" fit={'contain'} />
                    </Flex>

                </Box>
            </Show>

            <Show below="md">
            <Accordion defaultIndex={[0]} allowToggle>
                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        <Heading size={'md'}>2018-19</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Text >Our founder (Sarthak) has been working on this idea since his first year of engineering in 2018-19. Initially, the idea was basic and raw, aiming to connect vegetable shopkeepers on a single platform similar to Big Basket. He created a platform and successfully onboarded four vegetable shopkeepers.</Text>
                        <Image boxSize={'300px'} src="https://images.unsplash.com/flagged/photo-1681659159534-ae649100424e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        <Heading size={'md'}>2019-20</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Text>However, in his second year, he realized that the real problem was with the cart used by vegetable vendors. He then developed a vegetable vendor cart with an electric motor and slider to hold the vegetable basket, but the manufacturing cost was not affordable for the vendors, leading to the idea being dropped. He discussed this with his college senior, who suggested creating a scalable business model that introduces technology and impacts both the consumer and vendor levels.</Text>
                        <Image boxSize={'300px'} src="https://images.unsplash.com/flagged/photo-1681658993222-563e3939d6c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        <Heading size={'md'}>2020-21</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Text>During the pandemic in his third year (2020), he had ample time to critically analyze the model, learn from past mistakes, and create a solution to organize the unorganized sector of vegetable vendors and minimize their problems. He also identified burning problems faced by consumers of vegetable vendors and came up with a tech-based solution to connect both the vendor and consumer sides efficiently. He discussed this idea with his friend Sanket from NIT-Nagpur, who became his co-founder, and they started a small company called JJ Advertising Agency.</Text>
                        <Image fit='contain' boxSize={'300px'} src="https://images.unsplash.com/flagged/photo-1681665808996-52fbf3375599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" />
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        <Heading size={'md'}>2021-22</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Text>JJ Advertising Agency devised a new advertising method that allows enterprises to effectively advertise their products at a lower cost. The motivation behind starting this company was to conduct market analysis, test the acceptance ratio of new ideas, develop a minimum viable product (MVP), and run a pilot project to gain a better understanding of the market for their big startup plans.</Text>
                        <Image boxSize={'300px'} src="https://images.unsplash.com/flagged/photo-1681666033822-7ffadafc32e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"  />
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        <Heading size={'md'}>2022-23</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Text>Later, they were joined by co-founders Shritish, known for his multitasking abilities and out-of-the-box thinking, as well as team members Vipul, Mansi, Hritika and Rushikesh. In 2022, due to most team members being in their final year of college and having job offers in hand, they decided to pause all operations and gain corporate experience first before coming back together after a period of time, possibly a year, to resume their startup plans. However, founder Sarthak continued working on the Wayndor project with Sanket.</Text>
                        <Image boxSize={'300px'} src="https://images.unsplash.com/flagged/photo-1681664036682-26abfaafc0c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" fit='contain' />
                    </AccordionPanel>
                </AccordionItem>
                </Accordion>
            </Show>
        </Box>
        <Box marginTop={5}>
            <Heading marginBottom={4}>
                Founding Members :
            </Heading>
            <SimpleGrid spacingX={'10rem'} spacingY={5} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {team.map((e)=>{
                    return <Card key={e.image} variant={'outline'}>
                    <CardBody>
                        <Image src={`https://raw.githubusercontent.com/jjadvertising/wayndor-website-content/main/${e.image}`} />
                    </CardBody>
                    <Text alignSelf={'center'} fontSize='2xl'>{e.name}</Text>
                    <CardFooter justify='center'>
                        <a target="_blank" rel="noreferrer" href={e.instagram}><InstagramIcon/></a>
                        <div style={{width:'10px'}}/>
                        <a target="_blank" rel="noreferrer" href={e.linkedin}><LinkedInIcon/></a>
                    </CardFooter>
                </Card>
                })}
            </SimpleGrid>
        </Box>
    </Box>
    </>
}

export default About