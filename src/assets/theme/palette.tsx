import { amber, deepOrange, grey, deepPurple } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

// const getDesignTokens = ({
//   colorSchemes: {
//     light: {
//       palette: {
//         // palette values for light mode
//         // purples
//         primary: {
//           main: '#6A5BD5',
//           dark: '#3d348b',  
//         },
//         // background
//         secondary: {
//           main: '#eaebed',
//           dark: '#0F1924',
//         },
//         // texts
//         info: {
//           main: '#6A5BD5',
//           light: '#0F192470',
//           dark: '#eaebed',
//         },
//       }
//     },
//     dark: {
//       palette: {
//         // palette values for dark mode
//         // purples
//         primary: {
//           main: '#6A5BD5',
//           dark: '#3d348b',  
//         },
//        // background
//        secondary: {
//           main: '#0F1924',
//           dark: '#eaebed',
//         },
//         // texts
//         info: {
//           main: '#eaebed',
//           light: '#eaebed70',
//           dark: '#0F1924',
//         },
//       }
//     },
//   }
// })

//   export default getDesignTokens

  
  const getDesignTokens = (mode: PaletteMode) => ({
      palette: {
        mode,
        ...(mode === 'light'
          ? {
              // palette values for light mode
              // purples
              primary: {
                // main: deepPurple,
                main: '#6A5BD5',
                // dark: '#512da8',
                dark: '#5e35b1',
                darkest: '#3d348b',  
              },
              // background
              secondary: {
                main: '#eaebed',
                dark: '#0F1924',
              },
              // texts
              info: {
                main: '#0F1924',
                light: '#00000099',
                lightest: '#0F192440',
                dark: '#eaebed',
              },
            }
          : {
              // palette values for dark mode
              // purples
              primary: {
                main: '#6A5BD5',
                dark: '#5e35b1',
                darkest: '#3d348b', 
              },
            // background
            secondary: {
                main: '#0F1924',
                dark: '#eaebed',
              },
              // texts
              info: {
                // main: '#eaebed',
                // main: '#cdcdcd',
                main: '#dedede',
                light: '#eaebed90',
                lightest: '#eaebed40',
                dark: '#0F1924',
              },
            }),
      },
    });
  
    export default getDesignTokens