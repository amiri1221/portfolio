import { useRef, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import TextTransition, { presets } from 'react-text-transition'
import Typed from 'typed.js';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { stary } from '../../constants/particles'
const Home = ({HelmetTitle}) => {
    const nameEl = useRef(null)
    const [index, setIndex] = useState(0)
    const strings = [
        "توسعه دهنده فرانت هستم",
        "محتوا ساز دنیای برنامه نویسی هستم"
    ]
    useEffect(() => {
        const typename = new Typed(nameEl.current, {
            strings: ['امیر حسین رفیعی'],
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 10,
            showCursor: false
        });
        const internalId = setInterval(() => {
            setIndex(index => index + 1)
        }, 3000)
        return () => {
            typename.destroy();
            clearInterval(internalId)
        }
    }, [])

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <Box sx={{
            backgroundImage: `url(${require("../../assets/bg02.jpeg")})`,
            height: "100vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Helmet>
                <title>{HelmetTitle}</title>
            </Helmet>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={stary}

            />
            <Box component="div" sx={{ display: "flex" }} >
                <Typography variant='h3' sx={{ color: "whitesmoke", mt: 1, mr: 1 }}>
                    {"</"}
                </Typography>
                <Typography
                    variant='h3'
                    sx={{ color: "whitesmoke" }}
                    ref={nameEl}
                >
                </Typography>
                <Typography variant='h3' sx={{ color: "whitesmoke", mt: 1, ml: 1 }}>
                    {">"}
                </Typography>
            </Box>

            <Box component="div" sx={{ display: "flex" }} >
                <TextTransition springConfig={presets.wobbly} >
                    <Typography
                        variant='h4'
                        sx={{ color: "whitesmoke", mt: 4 }}

                    >
                        {strings[index % strings.length]}
                    </Typography>
                </TextTransition>
                <Typography
                    variant='h4'
                    sx={{ color: "whitesmoke", mt: 4 }}
                >
                    من یک
                </Typography>
            </Box>


        </Box>
    )
}
export default Home;