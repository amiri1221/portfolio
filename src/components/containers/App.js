
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material'
import SwipeableViews from 'react-swipeable-views';
import MainLayout from '../../layouts/MainLayout.';
import { useTheme } from '@mui/material/styles';
import { DrawerActionButton } from '../drawer';
import { Sidebar } from '../sidebar';
import SidebarContainers from './SidebarContainers'
import PagesContainer from './PagesContainer';
import Page from '../pages/components/Page';
import MainContext from '../context'
import { About, Home, Resume, SampleWork, Contact } from '../pages';
const App = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mode, setMde] = useState()
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"))
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)")
  useEffect(() => {
    setMde(prefersDarkMode ? "dark" : "light")
  }, [])
  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false)
    }
  }, [isMdUp])
  const handelePageNumber = (event, newValue) => {
    setPageNumber(newValue)
  }
  const handelThemeChange = () => {
    setMde(prevMode => prevMode === "light" ? "dark" : "light")
  }
  return (
    <MainContext.Provider value={{ pageNumber, handelePageNumber, handelThemeChange, drawerOpen, setDrawerOpen }}>
      <MainLayout mode={mode} >
        <SidebarContainers>
          <Sidebar />
        </SidebarContainers>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews
            index={pageNumber}
            onChangeIndex={handelePageNumber}
          >
            <Page pageNumber={pageNumber} index={0}>
              <Home HelmetTitle="وب سایت شخصی امیر حسین رفیعی" />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About HelmetTitle="وب سایت شخصی | درباره من" />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume HelmetTitle="وب سایت شخصی | رزومه من " />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <SampleWork HelmetTitle="وب سایت شخصی | نمونه کارهای من " />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Contact HelmetTitle="وب سایت شخصی | نمونه کارهای من " />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider >


  );
}
export default App;
