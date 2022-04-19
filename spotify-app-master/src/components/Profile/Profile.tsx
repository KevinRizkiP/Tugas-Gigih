import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  imageUrl: string;
  display_name: string;
}

const Profile: React.FC<IProps> = ({ imageUrl, display_name }) => {
  return (
    <Box>
      <Image borderRadius="full" w="20" src={imageUrl} alt="Dan Abramov" />
      <Text>{display_name}</Text>
    </Box>
  );
};

export default Profile;
