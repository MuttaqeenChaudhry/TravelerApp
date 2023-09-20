import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Alert from 'react-bootstrap/Alert';
import Home from './components/Home';
import ServicesInfo from './components/ServicesInfo';
import InfoBanner from './components/InfoBanner';
import About from './components/About';
import Services from './components/Services';
import AboutMain from './components/AboutMain';
import Contact from './components/Contact';
import Footer from './components/Footer';
import hme_logo from './SVGs/OdRd.svg'
import React, { useState } from 'react'
import { DataProvider } from './components/DataContext';
import ABT from './SVGs/Gift.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faBars, faX, faShareFromSquare, faGlobe } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faX, faShareFromSquare, faGlobe)


function App() {
  const [Show, setShow] = useState(null);
  const setAlert = () =>{
    setShow("show")
    setTimeout(() => {
      setShow(false)
    }, 1500);  
  }

  const Scroll_Top = () =>{
    const active = 0;
    document.documentElement.scrollTop = active;
    document.body.scrollTop = active;
  }

  return (
    <>
    <DataProvider value={Scroll_Top}>
    <Navbar showalert={setAlert}/>
    <Alert show={Show} style={{width:"87%",margin:"5em auto -5em", textAlign:"center"}} variant="info">Language changed successfull!</Alert>
    <Routes>
      <Route path='/' element={[<Home key="UndApp" title="Travel with us" description=" Your ultimate destination for seamless car booking experiences!
                Whether you're planning a road trip, a business venture, or a
                leisurely escape, Travelar is here to redefine the way you embark
                on your journeys. With a vast network of trusted rental
                providers and a user-friendly interface, we bring you a world of
                convenience at your fingertips." logo={hme_logo} />, <ServicesInfo/>, <InfoBanner Title="Travelar" description="Enjoy 30% discount on your first Rides !" Image={ABT}/>, <About/>]}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/AboutUs' element={<AboutMain top_function={Scroll_Top}/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </DataProvider>  
       
    </>
  );
}

export default App;
