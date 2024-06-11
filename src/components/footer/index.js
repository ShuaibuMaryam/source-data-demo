import {Box, useTheme} from "@chakra-ui/react";
import TopFooter from "./topFooter";
import BottomFooter from "./bottomFooter";

const Footer = () => {
    const theme = useTheme();
    return (
        <Box
            width={'100%'}
            mt={'2rem'} >
            <TopFooter />
            <BottomFooter />
        </Box>
    );
};

export default Footer;





