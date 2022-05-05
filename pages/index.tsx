import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { Box, Button, Container, Heading, HStack, Icon, Text, Image } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { BsTwitter, BsLinkedin } from "react-icons/bs";

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
          </HStack>
        </Box>
      </Container>
    </Layout>
  )
}

export default Home
