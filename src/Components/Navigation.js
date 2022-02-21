import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../Components/Contexts/AuthContext";

export default function Navigation() {
  const { currentUser, authenticate, logout } = useAuth();
  return (
    <Navbar variant="dark" bg="dark" expand="md" className="p-5">
      <Navbar.Brand href="/">ToDoAPI</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          <Link to="login" className="nav-link">
            Login
          </Link>
          <Link to="todo" className="nav-link">
            ToDo
          </Link>

          {currentUser && (
            <>
              <Link to="categories" className="nav-link">
                Categories
              </Link>
              <Link to="bootstrap" className="nav-link">
                Bootstrap
              </Link>
            </>
          )}

          {currentUser ? (
            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
          ) : (
            <Nav.Link onClick={() => authenticate()}>Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
