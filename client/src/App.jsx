import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/Signin'
import Header from './components/Header'
import FooterCom from './components/footer'
import PrivateRoute from './components/PrivateRoute'
import Dashbord from './pages/Dashbord'
import Contact from './pages/Contact'



export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashbord />} />
        </Route>
      </Routes>
      <FooterCom/>
    </BrowserRouter>
  )
}

