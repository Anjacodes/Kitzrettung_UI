import React, { useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Work from './components/AboutUs/Work/Work';
import AssociationMain from './components/AboutUs/Association/AssociationMain';
import MotivationMain from './components/AboutUs/Motivation/MotivationMain';
import ProcedureMain from './components/Services/Procedure/ProcedureMain';
import LegalMain from './components/Services/Legal/LegalMain';
import PricingMain from './components/Services/Pricing/PricingMain';
import BiologieMain from './components/Info/Biologie/BiologieMain';
import TechnikMain from './components/Info/Technik/TechnikMain';
import GalerieMain from './components/Info/Galerie/GalerieMain';
import BlogMain from './components/Blog/BlogMain';
import Navbar from './components/sharedComponents/Navbar';
import Contact from './components/Kontakt/Contact';
import Impressum from './components/Impressum_Datenschutz/Impressum';
import Datenschutz from './components/Impressum_Datenschutz/Datenschutz';
import SpendenMain from './components/Spenden/SpendenMain';
import PostDetail from './components/Blog/PostDetail';
import Ticker from './components/sharedComponents/Ticker';

const App = () => {

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="App text-3xl">
      <Ticker />
      <Navbar menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Routes>
        <Route path="/" element={<Main menuVisible={menuVisible} setMenuVisible={setMenuVisible} />}/>
        <Route path="arbeit" element={<Work />}/>
        <Route path="verein" element={<AssociationMain />} />
        <Route path="motivation" element={<MotivationMain />}/>
        <Route path="verfahren" element={<ProcedureMain />}/>
        <Route path="rechtliches" element={<LegalMain />}/>
        <Route path="kosten" element={<PricingMain />}/>
        <Route path="biologie" element={<BiologieMain />}/>
        <Route path="technik" element={<TechnikMain />}/>
        <Route path="galerie" element={<GalerieMain />}/>
        <Route path="blog" element={<BlogMain />}/>
            <Route path="blog/:id" element={<PostDetail />}/>
        <Route path="kontakt" element={<Contact />} />
        <Route path="impressum" element={<Impressum />}/>
        <Route path="datenschutz" element={<Datenschutz />}/>
        <Route path="spenden" element={<SpendenMain />}></Route>
      </Routes>
    </div>
  )
}

export default App
