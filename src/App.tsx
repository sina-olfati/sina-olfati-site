import React from 'react';
import './App.css';
import Index from './screens/Index';

// Theme
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import {provider}
import { CssBaseline } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

import { getDirection } from './localization/index';




function App() {
  return getDirection() === "ltr" ? (
    <ThemeProvider theme={theme}>
      {/* <StylesProvider> */}
        <CssBaseline />
        <Index/>
      {/* </StylesProvider> */}
     </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <Index/>
      </StylesProvider>
     </ThemeProvider>
  )
}

export default App;
