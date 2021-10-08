import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom';

export default function NavbarComp() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link style={{textDecoration:"none",color: "white"}} to="/">PROJECT CASE</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link style={{textDecoration:"none"}} to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link style={{textDecoration:"none"}} to="/addcategory">Add Category</Link></Nav.Link>
                        <Nav.Link><Link style={{textDecoration:"none"}} to="/addproduct">Add Product</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
