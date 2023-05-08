import { Drawer } from '@mui/material';
import { SidebarContent } from '../sidebar'
import { useContext } from 'react';
import MainContext from '../context'
const SidebarDrawer = ({ value, handelChange }) => {
    const { setDrawerOpen, drawerOpen } = useContext(MainContext)
    return (
        <Drawer
            open={drawerOpen}
            variant="temporary"
            onClose={() => setDrawerOpen(false)}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 300
                },
                display:{
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none"
                }

            }}
        >
            <SidebarContent />
        </Drawer>

    )
}
export default SidebarDrawer;