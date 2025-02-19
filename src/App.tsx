import React from 'react';
// SPA
// import { Routes, Route } from 'react-router-dom';

// Screens
import Home from './screens/Home';
// import OldHome2 from './screens/OldHome2';
// import Resume from './screens/Resume';
// import Portfolio from './screens/Portfolio';
// import Contact from './screens/Contact';

// mui theme (light and dark)
// import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import { PaletteMode } from '@mui/material';
import getDesignTokens from './assets/theme/palette';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


const App = () => {

  // language
  // const [bodyDir, setLanguage] = useState("ltr")

  // useEffect(() => {
  //   setLanguage(document.body.dir)
  // }, [localStorage.getItem("i18nextLng")])


  // const changeLanguage = (a: string) => {
  //   localStorage.setItem("i18nextLng", a)
  //   i18next.changeLanguage(a)
  //   setLanguage(a)
  // }

  // theme
  const [mode, setMode] = React.useState<PaletteMode>('light');
  // console.log("theme: ", mode)
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
        prevMode === 'light' ? 'dark' : 'light',
        );
        // setMode(mode)
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  // @ts-ignore
  const theme = React.useMemo(() => extendTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssVarsProvider theme={theme}>
            <CssBaseline />
              <Home theme={colorMode} />
            {/* <Provider store={store}> */}
              {/* <Routes>
                <Route path='/sina-olfati-site' element={<Home theme={colorMode} />} />
                <Route path='/sina-olfati-site/oldhome2' element={<OldHome2 />} />
                <Route path='/sina-olfati-site/resume' element={<Resume />} />
                <Route path='/sina-olfati-site/portfolio' element={<Portfolio />} />
                <Route path='/sina-olfati-site/contact' element={<Contact />} />
                <Route path="/sina-olfati-site/products/:id" element={<ProductDetails />} />
                <Route path="/sina-olfati-site/products" element={<Store />} />
                <Route path="/sina-olfati-site/cart" element={<ShopCart />} />   
              </Routes> */}
            {/* </Provider> */}
      </CssVarsProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
