import { Box } from '@mui/material'
const Page = ({ children, pageNumber, index, ...orther }) => {
    return (
        <div
            role="tabpanel"
            hiden={pageNumber !== index}
            id={`tabpanel-${index}`}
            aria-controls={`sidebar-tab-${index}`}
            {...orther}
        >
            {pageNumber === index && (
                <Box sx={{height:"100vh",overflow:"hidden"}}>

                    {children}
                    
                </Box>
            )}
        </div>
    )
}
export default Page;