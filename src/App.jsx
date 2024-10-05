import Header from './header/Header.jsx'
import Footer from './Footer/Footer.jsx'  
import AboutTheCompany from './AboutTheCompany/AboutTheCompany.jsx'
import Personal from './Personal/Personal.jsx'
import { Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<AboutTheCompany/>}/>
        <Route path='/AboutTheCompany' element={<AboutTheCompany/>}/>
        <Route path='/Personal' element={<Personal/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
