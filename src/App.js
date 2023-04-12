import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import React from 'react';

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Analytic from "./pages/Analytic";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytic" element={<Analytic />} />
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="Home">ARIZONA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="Dashboard">Dashboard</Nav.Link>
              <Nav.Link href="Analytic">Analytic</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;

