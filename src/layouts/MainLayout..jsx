import { ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { DarkTheme } from './themes'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
// creact RTL Cache
const CachRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});
const MainLayout = ({ children}) => {
    return (
        <CacheProvider value={CachRTL}>
            <ThemeProvider theme={DarkTheme}>
                <HelmetProvider>
                    {/* grip system */}

                    <Grid container sx={{ height: "100vh" }}>
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout;