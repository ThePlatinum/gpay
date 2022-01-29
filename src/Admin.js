import { Routes, Route } from 'react-router-dom';
import Login from './componets/login';
import Manage from './componets/manage';
import GPay from './GPay Logo.png'
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default function Admin() {

  return (
    <div className="Admin">
    <header className="App-header">
      <div>
        <Navbar
          expand="md"
          light
        >
          <NavbarBrand href="/">
            <img src={GPay} alt='GPay' width='90' />
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/">
                  About
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
            <Button color='outline-danger'>
              07065850835
            </Button>
          </Collapse>
        </Navbar>
      </div>
    </header>

      <div className=''>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='manage/*' element={<Manage />} />
        </Routes>
      </div>

      <footer>
      </footer>
    </div>
  );
}
