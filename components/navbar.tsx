import NextLink from "next/link"
import {
    Container,
    Box,
    Link,
    Stack,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Heading
} from '@chakra-ui/react';
import { AddIcon, EmailIcon, HamburgerIcon } from '@chakra-ui/icons';

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

export default function Navbar(props) {
    const { path } = props

    return (
        <Box
            position="sticky"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container display="flex" p={2} maxW="container.md" flexWrap="wrap" alignItems="center" justifyContent="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size='lg' letterSpacing={'tighter'}>
                        Austin Johnson
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    spacing="50px"
                    justifyContent="end"
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href='/skills' path={path}>About</LinkItem>
                    <LinkItem href='/blog' path={path}>Blog</LinkItem>
                    <LinkItem href='/contact' path={path}> <EmailIcon mx='4px' /> Contact Me</LinkItem>
                </Stack>

                <Box flex={1} alignItems="end">
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }} >
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/blog" passHref>
                                    <MenuItem as={Link}>Blog</MenuItem>
                                </NextLink>
                                <NextLink href="/contact" passHref>
                                    <MenuItem as={Link} icon={<EmailIcon />}>
                                        Contact me
                                    </MenuItem>
                                </NextLink>
                                {/* 
                                    if you wanted to create link for someone to "view source" of the portfolio
                                    <MenuItem as={Link} href="linktoGithub.sourcecode" >Blog</MenuItem>
                                */}
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

