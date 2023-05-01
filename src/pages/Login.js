import { useState } from 'react';
import {
    Box,
    Container,
    Button,
    Heading,
    Text,
    useToast,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Input,
} from '@chakra-ui/react';

const Login = () => {
    const [emailInput, setEmailInput] = useState('');
    const handleEmailInputChange = (e) => setEmailInput(e.target.value);

    const [passwordInput, setPasswordInput] = useState('');
    const handlePasswordInputChange = (e) => setPasswordInput(e.target.value);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isEmailError = isValidEmail(emailInput);
    console.log('isEmailError: ', isEmailError);

    const isValidPassword = (password) => {
        const passwordRegex =
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
    };

    const isPasswordError = isValidPassword(passwordInput);
    console.log('isPasswordError: ', isPasswordError);
    return (
        <Box bg='blue.400' color='white' height='100vh' width='100vw'>
            <Container maxW='3xl' centerContent>
                <Heading color='white' marginBottom={2} marginTop={8}>
                    Login
                </Heading>
                <Text color='white' align='center' fontSize={19}>
                    Welcome back! Please log in to your account.
                </Text>
                <Text color='white' align='center' fontSize={19}>
                    If you are a new user, you must sign up before logging in.
                </Text>
                <Container maxW='sm' marginTop={5}>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            type='email'
                            placeholder='harry@hogwarts.edu'
                            onChange={handleEmailInputChange}
                            bg='white'
                            color='black'
                        />
                    </FormControl>
                    <FormControl marginTop={5}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type='password'
                            placeholder='**************'
                            onChange={handlePasswordInputChange}
                            bg='white'
                            color='black'
                        />
                    </FormControl>
                    <Button
                        bg='blue.300'
                        color='white'
                        marginTop={7}
                        width='100%'
                        _hover={{ bg: 'blue.700' }}
                    >
                        Continue
                    </Button>
                    <Button
                        bg='blue.300'
                        color='white'
                        marginTop={25}
                        width='100%'
                        _hover={{ bg: 'blue.700' }}
                    >
                        New User Signup
                    </Button>
                </Container>
            </Container>
        </Box>
    );
};

export default Login;
