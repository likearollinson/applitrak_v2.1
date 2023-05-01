import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const NotFound = () => {
    return (
        <Box flexGrow={1} mt='90px'>
            <Text align='center' fontSize={50}>
                404 Page Not Found
            </Text>
            <Text align='center' fontSize={50}>
                <span role='img' aria-label='Face With Rolling Eyes Emoji'>
                    🙄
                </span>
            </Text>
        </Box>
    );
};

export default NotFound;
