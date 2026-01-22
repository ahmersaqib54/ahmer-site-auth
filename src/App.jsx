import React from 'react'
import Navbar from './component/Navbar/Navbar'
import AppRoutes from './Routes/AppRoutes'
import Signup from './pages/Signup'
import LogIn from './pages/LogIn'

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Signup /> */}
      <AppRoutes />
      {/* <LogIn /> */}
    </>
  )
}

export default App