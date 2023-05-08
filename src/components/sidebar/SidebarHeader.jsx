import { useState } from 'react';
import { Typography,Avatar} from '@mui/material';
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabetPersian";
import SocialMediaIcons from '../SocialMediaIcons';
const SidebarHeader = () => {
    const [start, setStart] = useState(false)
    return (
        <>

            <Avatar
                src={require("../../assets/download.png")}
                sx={{
                    width: 80, height: 80, margin: "0 auto", display: {
                        xs: "none",
                        sm: "none",
                        md: "block",
                        lg: "block"
                    }
                }}
            />

            <Typography variant='h5' color='text.primary' sx={{ mt: 1 }} >
                <RandomReveal
                    isPlaying
                    duration={4}
                    characterSet={alphabetPersian}
                    characters="امیر حسین رفیعی"
                    onComplete={() => setStart(true)}
                />
            </Typography>

            {start && (
                <Typography variant='caption' color='text.primary'>
                    <RandomReveal
                        isPlaying
                        duration={4}
                        characters="front & developer"
                    />

                </Typography>
            )}
            <SocialMediaIcons />
        </>
    )
}
export default SidebarHeader;