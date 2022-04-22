import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';

const NotFound: React.FC = () => {

  return (
    <>
      <Seo
        title="Not Found"
      />

      <Box as="main" className="center" gap={2}>
        <Text>
          404 NOT FOUND
        </Text>
        <Link to="/create-playlist">
          <Button>
            Go to content
          </Button>
        </Link>
      </Box>
    </>
  )
}

export default NotFound;
