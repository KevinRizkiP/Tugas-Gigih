import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div className="sticky">
      <Box
        bg="black"
        borderTop="1px"
        borderColor="gray.500"
        justifyContent="center"
        w="100%"
        p={3}
      >
        <Text align="center" color="white" fontSize={{ base: "xs", sm: "md" }}>
          &copy; 2022 Kevin Rizki Perdana - All rights reserved
        </Text>
      </Box>
    </div>
  );
};

export default Footer;
