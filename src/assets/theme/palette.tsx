import { amber, deepOrange, grey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            purple: {
              primary: '#6A5BD5',
              secondary: '#3d348b',  
            },
            background: {
              default: '#eaebed',
              opposite: '#0F1924',
            },
            text: {
              primary: '#00000090',
              secondary: '#00000070',
              opposite: '#eaebed',
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              // default: deepOrange[900],
              default: '#0F1924',
              paper: deepOrange[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });

  export default getDesignTokens