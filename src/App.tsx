import React, { useEffect, useState } from 'react';

// SPA
import { Routes, Route } from 'react-router-dom';

// i18next
import { useTranslation } from "react-i18next";
// import i18next from 'i18next';

import CssBaseline from '@mui/material/CssBaseline';

// Screens
import Home from './screens/Home';
import Resume from './screens/Resume';
import Portfolio from './screens/Portfolio';
import Contact from './screens/Contact';


// Shop
import Store from './shopping/components/Store';
import ProductDetails from './shopping/components/ProductDetails';
import Navbar from './shopping/components/shared/Navbar';
import ShopCart from './shopping/components/ShopCart';

// Context
import ProductContextProvider from './shopping/context/ProductContextProvider';
import CartContextProvider from './shopping/context/CartContextProvider';




const App = () => {

  const [bodyDir, setLanguage] = useState("ltr")
  const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation()

  useEffect(() => {
    setLanguage(document.body.dir)
  }, [localStorage.getItem("i18nextLng")])


  // const changeLanguage = (a: string) => {
  //   localStorage.setItem("i18nextLng", a)
  //   i18next.changeLanguage(a)
  //   setLanguage(a)
  // }

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <div className='changing-lang'>
          <button id="eng" onClick={() => changeLanguage("en")}>English</button> / <button onClick={() => changeLanguage("fa")}>فارسی</button>
      </div> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Store />} />
        <Route path="/cart" element={<ShopCart />} />
          
      </Routes>
    </React.Fragment>
  )
}

export default App;
