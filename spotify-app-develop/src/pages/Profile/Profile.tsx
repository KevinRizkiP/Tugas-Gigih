import { Avatar, Box, Button, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { useAppSelector } from "../../store";
import { User } from "../../types/user";

const Profile = () => {
  const user: User | null = useAppSelector((state) => state.auth.user);

  return (
    <>
      <Seo title="Profile" suffixTitle />

      <Layout>
        <Box
          as="main"
          minH="100vh"
          bgGradient={["linear(to-t,black 75%,yellow.700 )"]}
          w="100%"
          color="white"
          p={10}
        >
          <VStack>
            <Avatar size="2xl" src={user?.images[0]?.url} />
            <Text fontSize="xl">{user?.display_name}</Text>
            <Text >{user?.followers.total} Followers</Text>
            <Box
              style={{
                marginTop: 40,
              }}
            >
              <Link
                href={user?.external_urls.spotify}
                _hover={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  Spotify Profile
                </Button>
              </Link>
            </Box>
          </VStack>
        </Box>
      </Layout>
    </>
  );
};

export default Profile;
