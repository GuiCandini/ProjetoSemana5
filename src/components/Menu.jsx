import { Link } from "react-router-dom";
import { Container, Navbar, NavbarCollapse, Nav } from "react-bootstrap";
//Link: este componente habilita o SPA(Single-page application)
//Se houver links externos, utilize a tag <a>

function Menu() {
    return (
        <header>
            <Navbar className="fundo-nav" variant="light" expand="md">
                <Container fluid>
                    <Link className="nav-link" to="/">Home</Link>
                    <Navbar.Toggle />
                    <NavbarCollapse>
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/cadastro">Cadastro</Link>
                            <Link className="nav-link" to="/contato">Contato</Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Menu;