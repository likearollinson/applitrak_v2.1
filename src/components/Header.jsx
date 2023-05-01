import {
    Box,
    Container,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
} from '@chakra-ui/react';

const Header = () => {
    return (
        <Box
            bg='blue.600'
            color='white'
            width='100vw'
            height='33px'
            display='flex'
        >
            <Container maxW='3xl' justifyContent='space-between'>
                <Text fontSize='2xl'>AppliTrak</Text>
            </Container>
            {/* <Outlet /> */}
        </Box>
    );
};

export default Header;
