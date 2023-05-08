import { createContext } from 'react'

export default createContext({
    pageNumber: 0,
    handelePageNumber: () => { },
    handelThemeChange: () => { },
    drawerOpen: false,
    setDrawerOpen: () => { }
})