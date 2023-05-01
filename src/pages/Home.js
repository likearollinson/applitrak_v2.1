import React from 'react';
import { Box, Heading, Image, Text, Container, Button } from '@chakra-ui/react';
import { Outlet, Link } from 'react-router-dom';

import logo from '../assets/job_search_logo.png';

const Home = () => {
    return (
        <Box bg='blue.400' color='white' height='100vh' width='100vw'>
            <Container maxW='3xl' centerContent>
                <Image
                    src={logo}
                    alt='job search logo'
                    width={150}
                    margin='1rem'
                />
                <Heading color='white' marginBottom='1rem'>
                    AppliTrak
                </Heading>
                <Text color='white' align='center' fontSize={19}>
                    Use AppliTrak to keep track of the jobs you have applied to
                    and are interviewing for. The perfect companion to anyone
                    job searching!
                </Text>
                <Container maxW='sm' marginTop={5}>
                    <Text color='white' align='center' fontSize={16}>
                        If you are a returning user, please log in to view your
                        dashboard
                    </Text>
                    <Link to='login'>
                        <Button
                            bg='blue.300'
                            color='white'
                            marginTop={4}
                            marginBottom={7}
                            width='100%'
                            _hover={{ bg: 'blue.700' }}
                        >
                            Login
                        </Button>
                    </Link>
                    <Text color='white' align='center' fontSize={16}>
                        New users please sign up so you can continue to use
                        AppliTrak
                    </Text>
                    <Link to='signup'>
                        <Button
                            bg='blue.300'
                            color='white'
                            marginTop={4}
                            width='100%'
                            _hover={{ bg: 'blue.700' }}
                        >
                            Signup
                        </Button>
                    </Link>
                </Container>
            </Container>
            <Outlet />
        </Box>
    );
};

export default Home;
