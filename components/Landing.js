import React from "react";
import { Box, Text} from "@chakra-ui/react";
import boy from '../assets/Hamburguesa.png';

const Landing = () => {
return(
    <Box width="100%" display="flex" flexWrap="wrap" minHeight="92vh"backgroundColor="#143AF4"overflow="hidden">
        <Box position="relative" top={10} left={40} width="40%">
            <Text fontFamily="Maven Pro" fontSize="4xl" width="50%"color="white" fontWeight="semibold">
                El mejor restaurante que ha triunfado en los estados unidos llega a madrid con precios irrevatibles.
            </Text>
        </Box>
        <Box width="40%"position="relative" top={20} left={40}>
            <img src={boy} width="600px" height="356px" alt="boy_photo"></img>
        </Box>
    </Box>
)
}
export default Landing;