import { Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/index'

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Flex>
      <Navbar />

      {children}
    </Flex>
  )
}

export default Layout;