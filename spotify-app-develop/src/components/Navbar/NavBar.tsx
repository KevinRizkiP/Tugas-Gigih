import React, { useEffect, useState } from "react";
import { logout } from "../../slice/authSlice";
import {
  Box,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../store";
import { FiHome } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { User } from "../../types/user";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const user: User | null = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();



  return (
    <Box
      as="nav"
      bg="black"
      borderRight="1px"
      borderColor="gray"
      p={3}
      pos="sticky"
      zIndex={999}
      top={0}
      w="60"
    >
      <HStack justify="space-between">
        <HStack gap={3}>
          <Avatar size="md" src={user?.images[0]?.url} />
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<FaChevronDown />}
                bg="transparent"
                _hover={{
                  bg: "transparent",
                }}
                _active={{
                  bg: "transparent",
                }}
                px={0}
              >
                {user?.display_name.split(" ")[0]}
              </MenuButton>
              <MenuList>
                <Link to="/profile">
                  <MenuItem>Profile</MenuItem>
                </Link>
                <MenuItem onClick={() => dispatch(logout())} color="red.500">
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </HStack>
      <VStack>
        <Box justifyContent="left" mt={10} w="100%">
          <Button
            variant="link"
            fontSize="xl"
            leftIcon={<FiHome size="1.5em" />}
          >
            <Link to="/create-playlist">Home</Link>
          </Button>
        </Box>
        <Divider variant="solid" my={10} />
        <Box justifyContent="left" w="100%">
            <Button variant="link">Playlist</Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Navbar;
