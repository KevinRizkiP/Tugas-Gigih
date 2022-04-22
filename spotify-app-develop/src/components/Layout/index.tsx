import React from "react";
import Navbar from "../Navbar/NavBar";
import { Flex } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
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
