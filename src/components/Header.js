import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container } from "react-bootstrap";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {Link} from "react-router-dom";


function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>React Pokemon 🏀</Navbar.Brand>
          </LinkContainer>
         </Container>
        <Link to = "/favourite"><Fab color="secondary" aria-label="Add">
          <AddIcon />
        </Fab></Link>
      </Navbar>
    </header>
  );
}

export default Header;
