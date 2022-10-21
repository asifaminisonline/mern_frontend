import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import Admin from './Admin.js'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/Admin">Admin</Link>
          <Link to="/DriverSection">Driver Reg</Link>
            {/* <Nav.Link to={/}>HOME</Nav.Link>
            <Nav.Link to="/DriverSection">DRIVER REGISTRATION</Nav.Link>
            <Nav.Link to="<Admin/>">ADMIN</Nav.Link>      */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;






