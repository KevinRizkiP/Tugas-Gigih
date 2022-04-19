import React from "react";
import { logout } from "../../slice/authSlice";
import { Box, HStack, Button, VStack, Flex, Divider } from "@chakra-ui/react";
import { useAppDispatch } from "../../store";
// import Profile from "../Profile/Profile";
import { FiHome } from "react-icons/fi";
// import { User as IUsers } from "../../types/user";

const Navbar: React.FC = () => {
  // const [user, setUser] = useState<IUsers[]>([]);
  const dispatch = useAppDispatch();

  

  return (
    <Box
      as="nav"
      bg="black"
      borderRight="1px"
      borderColor="gray"
      p={3}
      pos="sticky"
      zIndex={9999}
      top={0}
      w="60"
    >
      <HStack justify="space-between">
        {/* {user.map((users) => (
          <Profile imageUrl={users.images[0].url} display_name={users.display_name} />
        ))} */}
        <Box>
          <Button colorScheme="primary" onClick={() => dispatch(logout())}>
            Logout
          </Button>
        </Box>
      </HStack>
      <VStack mt={10} w="100%">
        <VStack>
          <Flex justifyContent="space-between" alignItems="center">
            <Button
              variant="link"
              fontSize="xl"
              leftIcon={<FiHome size="1.5em" />}
            >
              Home
            </Button>
          </Flex>
        </VStack>
        <Divider variant="solid" my={10} />
        <Box>
          <Button variant="link" fontSize="xl">
            Playlist
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Navbar;
