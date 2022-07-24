// import { createTheme } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles';import palette from "./palette";
import { getDirection, getFont } from "../localization/index";

const theme = createTheme({
  palette: palette,
  direction: getDirection(),
  spacing: 2.5,
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: "3.3rem",
      lineHeight: "4rem",
      fontFamily: getFont(),
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.6rem",
      lineHeight: "3.3rem",
      fontFamily: getFont(),
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: "2.7rem",
      fontFamily: getFont(),
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.7rem",
      lineHeight: "2.4rem",
      fontFamily: getFont(),
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.4rem",
      lineHeight: "2.1rem",
      fontFamily: getFont(),
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.15rem",
      lineHeight: "1.85rem",
      fontFamily: getFont(),
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: "2rem",
      fontFamily: getFont(),
      marginTop: 15,
    },
    body: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "1.8rem",
      color: "#21605D",
      fontFamily: getFont(),
    },
    button: {
      fontWeight: 400,
      fontSize: "0.9rem",
      lineHeight: 50,
      color: "#FFFFFF",
      letterSpacing: 2,
      fontFamily: getFont(),
    },
  },
});

export default theme;
