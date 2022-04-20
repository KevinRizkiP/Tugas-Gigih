import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/NavBar";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <Flex>
        <Navbar />

        {children}
      </Flex>
      <Footer />
    </div>
  );
};

export default Layout;
