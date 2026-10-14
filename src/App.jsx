import React from 'react'
import Navbar from './component/navbar'
import Sidebar from './component/sidebar'
import Home from './pages/home'
import Footer from './component/footer'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import AboutPage from './pages/aboutPage'
import Service from './pages/service'
import ContactPage from './pages/contactPage'
import Loginpage from './pages/loginpage'
import StartProject from './pages/startproject.jsx'
import Register from './component/register/REGISTER.jsx'
import Testimonial from './component/testimonial.jsx'
import ForgotPassword from './component/register/forgotpassword.jsx'
const App = () => {
  return (
    <BrowserRouter>

      <div className=' min-h-screen bg-white'>
        <div className='w-full'>
          <Navbar />

        </div>

        <Sidebar />

        <div className='ml-56 flex-1'>


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/serve' element={<Service />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/start-project' element={<StartProject />} />
            <Route path='/log' element={<Loginpage />} />
            <Route path='/tes' element={<Testimonial />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />

          </Routes>
          <Footer />

        </div>
      </div>

    </BrowserRouter>
  )
}


export default App