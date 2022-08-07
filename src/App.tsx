import React, { useEffect, useState } from 'react';

// SPA
import { Routes, Route } from 'react-router-dom';

// Screens
import Home from './screens/Home';
import Resume from './screens/Resume';
import Portfolio from './screens/Portfolio';
import Contact from './screens/Contact';


// Shop
import Store from './shopping/components/Store';
import ProductDetails from './shopping/components/ProductDetails';
import ShopCart from './shopping/components/ShopCart';

// Redux
import { Provider } from 'react-redux';
import store from './shopping/redux/store';



const App = () => {

  const [bodyDir, setLanguage] = useState("ltr")

  useEffect(() => {
    setLanguage(document.body.dir)
  }, [localStorage.getItem("i18nextLng")])


  // const changeLanguage = (a: string) => {
  //   localStorage.setItem("i18nextLng", a)
  //   i18next.changeLanguage(a)
  //   setLanguage(a)
  // }

  return (
      <Provider store={store}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />   
        </Routes>
      </Provider>
  )
}

export default App;
