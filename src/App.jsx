import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Login from './pages/Login';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='dashboard' element={<Dashboard />}/> 
        <Route path='bookings' element={<Bookings />}/> 
        <Route path='cabins' element={<Cabins />}/> 
        <Route path='users' element={<Users />}/> 
        <Route path='settings' element={<Settings />}/> 
        <Route path='account' element={<Account />}/> 
        <Route path='login' element={<Login />}/> 
      </Routes>
    </Router>
    
    ) 
}
 
export default App
