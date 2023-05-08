import { GitHub, Instagram, Telegram, WhatsApp } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";


const SocialMediaIcons = () => {
    return (
        <Box component="div" sx={{ margin: "0 auto", textAlign: "center" }} >
            <IconButton aria-label='Github' >
                <a href='#' target="_blank" rel="noopener noreferrer" >
                    <GitHub sx={{ color: "gray" }} />
                </a>
            </IconButton>
            <IconButton aria-label='Instagram' >
                <a href='#' target="_blank" rel="noopener noreferrer" >
                    <Instagram sx={{ color: "gray" }} />
                </a>
            </IconButton>
            <IconButton aria-label='Telegram' >
                <a href='#' target="_blank" rel="noopener noreferrer" >
                    <Telegram sx={{ color: "gray" }} />
                </a>
            </IconButton>
            <IconButton aria-label='WhatsApp' >
                <a href='#' target="_blank" rel="noopener noreferrer" >
                    <WhatsApp sx={{ color: "gray" }} />
                </a>
            </IconButton>
        </Box>
    );
}

export default SocialMediaIcons;