import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarHome() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">Happy Travels</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/user">Usuarios</Nav.Link>
          <Nav.Link href="/product">Productos</Nav.Link>
          <Nav.Link href="/login">Cerrar</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}