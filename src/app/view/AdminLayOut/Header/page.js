"use client"
import Link from 'next/link';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand >React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-black mt-1 gap-lg-5 gap-2 gap-md-2">
                            <Link href="/">Home</Link>
                            <Link href="/Admin/Login">Login</Link>
                            <Link href="/Admin/Login1">Login1</Link>
                            <Link href="/view/Admin/AdminPageList">Admin Page List</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      
        </div>
    );
};

export default Header;