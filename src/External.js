import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './componets/banner';
import HomeUser from './componets/homeUser';
import Loan from './componets/loan';
import { useNavigate } from "react-router"
import Success from './componets/success';
import GPay from './GPay Logo.png'
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default function External({match}) {
  const [bannerTitle, setTitle] = useState('Home')
  const [bannerTag, setTag] = useState('Will contain informations and other parts of the website')
  //const [active, setActive] = useState('home')
  const [home, sethome] = useState('active')
  const [loan, setloan] = useState('')

  const navigate = useNavigate()

  const menuItem = (menu) => {
    //setActive(menu)
    switch (menu) {
      case 'home':
        sethome('active')
        setloan('')
        setTitle('Home')
        setTag('Will contain informations and other parts of the website')
        navigate('')
        break
      case 'loan':
        setloan('active')
        sethome('')
        setTitle('Loan Request Form')
        setTag('This form is designed to help you request for tangible loan')
        navigate('loan')
        break
      default:
        break
    }
  }

  return (
    <div className="App">

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

      <Banner title={bannerTitle} tag={bannerTag} />

      <div className='row'>
        <div className='navigator col-md-2'>
          <div className='title'> Featured </div>
          <div className='row'>
            <div className={`col-4 col-md-12 menuItem ` + home} onClick={()=>menuItem('home')} id='home' >
              Home
            </div>
            <div className={`col-4 col-md-12 menuItem ` + loan}  onClick={()=>menuItem('loan')}  id='loanRequest' >
              Loan Request
            </div>
          </div>
        </div>

        <div className='col-md-10'>
            <Routes>
              <Route path='/' element={<HomeUser admin='' />}/>
              <Route path='loan' element={<Loan />}/>
              <Route path='success' element={<Success />}/>
            </Routes>
        </div>
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
