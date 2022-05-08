import "bootstrap/dist/css/bootstrap.min.css";
import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/inventory">
              Inventory
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/new">
              Add New
            </Nav.Link>

            <div className="p-0 m-0 d-flex align-items-center ">
              {user ? (
                <div>
                  <span className="text-info">
                    {user.displayName ? user.displayName : user.email}
                  </span>
                  <Button
                    onClick={() => signOut(auth)}
                    className="ms-2 bg-danger border-0"
                  >
                    LogOut
                  </Button>
                </div>
              ) : (
                <Nav.Link className="btn bg-info text-light" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
