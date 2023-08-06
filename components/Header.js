import React from "react"
import { Box, HStack, Link, Heading, Text} from "@chakra-ui/react";

const Header = () => {

return(
    <Box
    top={0}
    left={0}
    right={0}
    backgroundColor="#495E57"
    display="flex"
    height="80px"
    >
        <Box width="800px" position="relative" top={3} left={5}>
            <Link href="/"><Heading size="2xl" fontFamily="Maven Pro" fontWeight="bold" color="#F4CE14">LITTLE PAGE</Heading></Link>
        </Box>
        <Box width="600px" height="40px" position="relative" justifyContent="center"top={4} right={5} display="flex" >
            <Link fontSize="3xl" color="white" margin="0 auto " fontWeight="bold"  fontFamily="Markazi Text" href="/booking">Reservar</Link>
            <Text fontSize="3xl" color="white" margin="6 auto" fontWeight="bold" fontFamily="Markazi Text">Contacto</Text>
        </Box>
    </Box>
)

}
export default Header;