import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './banner';
import Lists from './lists';
import View from './view';
import { useNavigate } from "react-router"
import HomeUser from './homeUser';

export default function Manage() {
  const [bannerTitle, setTitle] = useState('Issue Resolution Form')
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
        navigate('')
        break
      case 'loan':
        setloan('active')
        sethome('')
        setTitle('Loan Requests')
        navigate('loan')
        break
      default:
        break
    }
  }

  return (
    <div className="App">

      <Banner title={bannerTitle} />

      <div className='row'>
        <div className='navigator col-md-2'>
          <div className='title'> Featured </div>
          <div className='row'>
            <div className={`col-4 col-md-12 menuItem ` + home} onClick={()=>menuItem('home')} id='home' >
              Home
            </div>
            <div className={`col-4 col-md-12 menuItem ` + loan}  onClick={()=>menuItem('loan')}  id='loanRequest' >
              Loans
            </div>
          </div>
        </div>

        <div className='col-md-10'>
            <Routes>
              <Route path='' element={<HomeUser admin='Admin' />}/>
              <Route path=':tbl' element={<Lists />}/>
              <Route path='view/:tbl/:id' element={<View />}/>
            </Routes>
        </div>
      </div>

    </div>
  );
}
