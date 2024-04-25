
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import PagenotFound from './pages/PagenotFound';
import Policy from './pages/Policy';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './user/Dashboard';
import Privateroute from './Routes/Privateroute';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminRoute from './Routes/AdminRoute';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import User from './pages/Admin/User';
import Orders from './pages/User/Orders';
import Profile from './pages/User/Profile';



function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>

      <Route path='/dashboard' element={<Privateroute></Privateroute>}>
         <Route path='user' element={<Dashboard></Dashboard>}></Route>
         <Route path='user/orders' element={<Orders></Orders>}></Route>
         <Route path='user/profile' element={<Profile></Profile>}></Route>
      </Route>
      
      <Route path='/dashboard' element={<AdminRoute></AdminRoute>}>
        <Route path='admin' element ={<AdminDashboard></AdminDashboard>}/>
        <Route path="admin/create-category" element={<CreateCategory/>}/>
        <Route path="admin/create-product" element={<CreateProduct/>}/>
        <Route path="admin/users" element={<User/>}/>
      </Route>

      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>

      <Route path='/*' element={<PagenotFound></PagenotFound>}></Route>
      <Route path='/policy' element={<Policy></Policy>}></Route>
      
    </Routes>
    
    
  
    </>
    
    
  )
}

export default App;
