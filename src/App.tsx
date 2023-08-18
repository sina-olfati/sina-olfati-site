import React, { useEffect, useState } from 'react';

// SPA
import { Routes, Route } from 'react-router-dom';

// Screens
import Home from './screens/Home';
import OldHome2 from './screens/OldHome2';
import Resume from './screens/Resume';
import Portfolio from './screens/Portfolio';
import Contact from './screens/Contact';


// Shop
import Store from './shopping/components/Store';
import ProductDetails from './shopping/components/ProductDetails';
import ShopCart from './shopping/components/ShopCart';

// mui theme (light and dark)
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import { PaletteMode } from '@mui/material';
import getDesignTokens from './assets/theme/palette';

// Redux
import { Provider } from 'react-redux';
import store from './shopping/redux/store';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


const App = () => {

  // language
  const [bodyDir, setLanguage] = useState("ltr")

  useEffect(() => {
    setLanguage(document.body.dir)
  }, [localStorage.getItem("i18nextLng")])


  // const changeLanguage = (a: string) => {
  //   localStorage.setItem("i18nextLng", a)
  //   i18next.changeLanguage(a)
  //   setLanguage(a)
  // }

  // theme
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        console.log("theme changed")
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            {/* <Home theme={colorMode} /> */}
            <Routes>
              <Route path='/sina-olfati-site' element={<Home theme={colorMode} />} />
              <Route path='/sina-olfati-site/oldhome2' element={<OldHome2 />} />
              <Route path='/sina-olfati-site/resume' element={<Resume />} />
              <Route path='/sina-olfati-site/portfolio' element={<Portfolio />} />
              <Route path='/sina-olfati-site/contact' element={<Contact />} />
              <Route path="/sina-olfati-site/products/:id" element={<ProductDetails />} />
              <Route path="/sina-olfati-site/products" element={<Store />} />
              <Route path="/sina-olfati-site/cart" element={<ShopCart />} />   
            </Routes>
          </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
