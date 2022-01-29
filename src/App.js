import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Navigate, Route } from 'react-router-dom';
import './App.css';
import Admin from './Admin';
import External from './External';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Navigate replace to='/user' />} />
        <Route path='/user/*' element={<External />} />
        <Route path='/admin/*' element={<Admin />} />
      </Routes>
  );
}

export default App;
