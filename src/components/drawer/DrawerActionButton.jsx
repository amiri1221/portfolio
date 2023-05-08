import { useContext } from 'react';
import MainLayout from '../context'
import { Box, Fab } from '@mui/material';
import { MenuRounded } from '@mui/icons-material';
const DrawerActionButton = () => {
    const { setDrawerOpen } = useContext(MainLayout)
    return (
        <Box
            sx={{
                position:"absolute",
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none"
                }
            }}
        >
            <Fab
                color="primery"
                aria-lable="Sidebar"
                size="small"
                sx={{ m: 2 }}
                onClick={() => setDrawerOpen(true)}
            >
                <MenuRounded />
            </Fab>
        </Box>
    )
}
export default DrawerActionButton;