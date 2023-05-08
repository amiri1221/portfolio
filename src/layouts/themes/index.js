import { createTheme } from '@mui/material/styles';
//creact custom theme
export const DarkTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "dark",
        primary: {
            main: "#8be9fd"
        },
        secondary: {
            main: "#bd93f9"
        }
    },
    typography: {
        fontFamily: "Vazir",
        button: {
            fontFamily: "tahoma",
            fontSize: "20px"
        }
    },
});