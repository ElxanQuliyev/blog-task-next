import React from "react";
import { Navbar, Nav, Container } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";
import Link from "next/link";

const MainNavigation = (props) => {
  return (
      <Container>
    <Navbar {...props}>
        <Navbar.Brand href="#">Afea Group Task</Navbar.Brand>
        <Nav pullRight>
          <Nav.Item eventKey="1" icon={<HomeIcon />}>
            Home
          </Nav.Item>
          <Nav.Menu title="Blogs">
            <Nav.Item eventKey="4">All Blogs</Nav.Item>
            <Nav.Item eventKey="5">
                <Link href="/blogs/add-blog">Add Blog</Link>
            </Nav.Item>
          </Nav.Menu>
          <Nav.Menu title="Account">
            <Nav.Item eventKey="4">Login</Nav.Item>
            <Nav.Item eventKey="5">Register</Nav.Item>
          </Nav.Menu>
        </Nav>
    </Navbar>
      </Container>
  );
};

export default MainNavigation;
