import type { NextPage } from 'next'
import NextLink from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { Box, Button, Container, Heading, HStack, Icon, Text, Image, Divider, Link} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { BsTwitter, BsLinkedin, BsGithub, BsFillFileEarmarkTextFill } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content='width=device-width' />
        <title>Austin Johnson - Homepage</title>
      </Head>
      <Container maxW="container.xl" boxShadow='lg' pb="10" my='350' borderRadius="10" display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-around">
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Heading as="h1" size="3xl">Austin Johnson</Heading>
            <Text as="p" fontSize="2xl" color='tomato'>Full-Stack Developer</Text>
            <Text as="p">Located in Phoenix, Arizona</Text>
          </Box>
          <Box boxSize="sm" transform="translateY(-250px)">
            <Image borderRadius="md" src="/20200120_ventureplex7681.jpg" alt="image of Austin Johnson" />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Button colorScheme='teal' size='lg' variant='solid'>
            Work With Me
          </Button>
          <HStack spacing="24px">
            <Icon as={BsTwitter} color='teal' w={12} h={12}></Icon>
            <Icon as={BsLinkedin} color='teal' w={12} h={12}></Icon>
            <Icon as={BsGithub} color='teal' w={12} h={12}></Icon>
          </HStack>
        </Box>
      </Container>

      <Box id="about">
        <Container maxW="8xl" mb='10' centerContent>
          <Heading as="h2" className=''><u>About Me</u></Heading>
        </Container>
        <Container maxW="container.xl" boxShadow='lg' p="20" mb='350' borderRadius="10">
          <Text as="p" fontSize='xl' pb='10'>I am a self-taught software engineer, with about 2 years experience in the IT industry.
            I got my start as intern at Web Development shop called Venturplex. We built a lot of Frontend applications using Angular, NgRx, and other technologies.
            Most of our work was contracts for team, such as Capital One, American Airlines. With a lot of long nights and early mornings, and the help of team members at Venturplex, I taught myself to program.
            I worked here till Venturplex was bought ought by Briebug in early 2020. Since then I have worked in different roles, such as a Systems Engineer 1 for Midland Credit Management, and a Full-Stack Engineer at Konica Minolta.
            If you would like to see more of experience checkout my{' '}
            <NextLink href='#resume' passHref>
              <Link color='tomato'>
                  Resume <Icon as={BsFillFileEarmarkTextFill}/>
              </Link>
            </NextLink>!
          </Text>
        </Container>
        <Divider />
      </Box>


      <Box id="resume">
        <Container maxW="8xl">
          Resume Section
          <Divider />
        </Container>
      </Box>
      <Box id="portfolio">
        <Container maxW="8xl">
          Portfolio Section
          <Divider />
        </Container>
      </Box>
      <Box id="blogBanner">
        <Container maxW="8xl">
          About Section
          <Divider />
        </Container>
      </Box>
      <Box id="contact">
        <Container maxW="8xl">
          Contact Me Section
          <Divider />
        </Container>
      </Box>
    </Layout>
  )
}

export default Home
