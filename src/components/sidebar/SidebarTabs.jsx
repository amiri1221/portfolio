import { useContext } from 'react';
import MainContext from '../context'
import { Tabs, Tab } from '@mui/material';
import { grey } from '@mui/material/colors'
import {tabsData} from '../../constants/tabsData';
import { useTheme } from '@mui/material/styles';
const SidebarTabs = () => {
    const { pageNumber, handelePageNumber, setDrawerOpen } = useContext(MainContext)
    const data = tabsData()
    const theme = useTheme()
    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            value={pageNumber}
            onChange={handelePageNumber}
            indicatorColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
            textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
        >
            {data.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition="start"
                    sx={{
                        fontSize: "15px",
                        backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[500] ,
                        color : "text.primary",
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1,
                        "&.MuiTab-root": {
                            minHeight: 50,
                        }
                    }}
                    {...tab}
                    onClick={() => setDrawerOpen(false)}
                />
            ))}
        </Tabs>
    )
}
export default SidebarTabs;