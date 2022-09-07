import type { NextPage } from "next";
import NextLink from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Text,
  Image,
  Divider,
  Link,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import {
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import {
  SiPostgresql,
  SiJavascript,
  SiAngular,
  SiNrwl,
  SiBootstrap,
} from "react-icons/si";
import { JavascriptIcon } from "../components/icons/javascript";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Austin Johnson - Homepage</title>
      </Head>
      <Container
        maxW="container.xl"
        boxShadow="lg"
        pb="10"
        my="300"
        borderRadius="10"
        display="flex"
        flexDirection="column"
      >
        <Box display="flex" justifyContent="space-around">
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Heading as="h1" size="3xl">
              Austin Johnson
            </Heading>
            <Text as="p" fontSize="2xl" color="tomato">
              Full-Stack Developer
            </Text>
            <Text as="p">Located in Phoenix, Arizona</Text>
          </Box>
          <Box boxSize="sm" transform="translateY(-250px)">
            <Image
              borderRadius="md"
              src="/20200120_ventureplex7681.jpg"
              alt="image of Austin Johnson"
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Button colorScheme="teal" size="lg" variant="solid">
            Work With Me
          </Button>
          <HStack spacing="24px">
            <Icon as={BsTwitter} color="teal" w={12} h={12}></Icon>
            <Icon as={BsLinkedin} color="teal" w={12} h={12}></Icon>
            <Icon as={BsGithub} color="teal" w={12} h={12}></Icon>
          </HStack>
        </Box>
      </Container>

      <Container maxW="8xl" mb="5" centerContent>
        <Heading as="h2" className="">
          <u>About Me</u>
        </Heading>
      </Container>

      <Box id="about">
        <Container
          maxW="container.xl"
          boxShadow="lg"
          p="16"
          mb="350"
          borderRadius="10"
          display={{ md: "flex" }}
          flexDirection={{ lg: "row-reverse", md: "column" }}
        >
          <Box>
            <Text as="p" fontSize="lg" pb="10">
              I am a self-taught software engineer, with about 2 years
              experience in the IT industry. I got my start as intern at Web
              Development shop called Venturplex. We built a lot of Frontend
              applications using Angular, NgRx, and other technologies. Most of
              our work was contracts for team, such as Capital One, American
              Airlines. With a lot of long nights and early mornings, and the
              help of team members at Venturplex, I taught myself to program. I
              worked here till Venturplex was bought ought by Briebug in early
              2020. Since then I have worked in different roles, such as a
              Systems Engineer 1 for Midland Credit Management, and a Full-Stack
              Engineer at Konica Minolta. If you would like to see more of
              experience checkout my{" "}
              <NextLink href="#resume" passHref>
                <Link as="bold" color="tomato">
                  Resume <Icon as={BsFillFileEarmarkTextFill} />
                </Link>
              </NextLink>
              !
            </Text>
          </Box>

          <Box>
            <Heading>Technologies I am experienced with</Heading>
            <Flex direction="row" wrap="wrap" justify="center">
              <Flex direction="column" align="center">
                <Image
                  src="angular-icon.svg"
                  boxSize="46px"
                  alt="Angular Logo"
                />
                <Text>Angular</Text>
              </Flex>
              <Flex direction="column" align="center">
                <Image src="ngrx.svg" boxSize="46px" alt="NgRx Logo" />
                <Text>NgRx</Text>
              </Flex>
              <Flex direction="column" align="center">
                <Image
                  src="logo-javascript.svg"
                  boxSize="46px"
                  alt="JavaScript Logo"
                />
                <Text>JavaScript</Text>
              </Flex>
              <Flex direction="column" align="center">
                <Image
                  src="bootstrap-5-1.svg"
                  boxSize="46px"
                  alt="Bootstrap Logo"
                />
                <Text>Bootstrap</Text>
              </Flex>
              <Flex direction="column" align="center">
                <Image src="sass-1.svg" boxSize="46px" alt="SASS Logo" />
                <Text>SCSS</Text>
              </Flex>
              <Flex direction="column" align="center">
                <Image
                  src="postgresql.svg"
                  boxSize="46px"
                  alt="PostgresSQL Logo"
                />
                <Text>PostgresSQL</Text>
              </Flex>
            </Flex>
          </Box>
        </Container>
      </Box>

      <Box id="resume">
        <Container maxW="8xl" centerContent>
          <Divider />
          <Heading py="20">
            <u>Resume</u>
          </Heading>

        </Container>

        <Text>Section with some text that shows some stuff, that </Text>
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
  );
};

export default Home;
