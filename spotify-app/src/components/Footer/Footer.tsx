import React from "react";
import { Box } from "@chakra-ui/react";


const Footer = () => {
  return (
    <div className="sticky">
      <Box
        bg="black"
        borderTop="1px"
        borderColor="gray.500"
        justifyContent="center"
        w="100%"
        h="36"
      ></Box>
    </div>
  );
};

export default Footer;
