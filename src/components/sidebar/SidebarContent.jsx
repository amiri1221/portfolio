import { Box, Divider } from '@mui/material';
import { SidebarHeader, SidebarTabs, SidebarFooter } from '.';

const SidebarContent = () => {

    return (
        <Box sx={{ justifyContent: "center", textAlign: "center", mt: 3 }}>
            {/* Sidebar Header */}
            <SidebarHeader />
            <Divider variant="middle" sx={{ mb: 2 }} />
            {/* Sidebar tabs */}
            <SidebarTabs />
            <Divider variant="middle" sx={{ mt: 2 }} />
            {/*Sidebar footer*/}
            <SidebarFooter />
        </Box>
    )
}
export default SidebarContent;