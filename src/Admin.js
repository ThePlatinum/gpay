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
        <div className='row'>
          <div className='col-sm-4'>
            <img src={GPay} alt='GPay' width='100' />
            <br /> <br/>
            <p> Gpay is a product of Gbadurlight Nigeria Limited. We are marketing consulting company for Fintech companies and Nigerian Deposit Money Banks on Agency banking. Gpay focuses on bringing financial services to the end-users especially the un-banked populace in nigeria. Our clients includes First Bank of Nigeria Plc, WEMA bank Plc and IKONIK. </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
