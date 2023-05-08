import { useState, useEffect } from "react";
import {
    Typography,
    Card,
    CardContent,
    Slide,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {AccountCircle,} from "@mui/icons-material";
import CustomDivider from "../common/CustomDivider";
import worldMap from "../../assets/map.svg";
import { Helmet } from "react-helmet-async";

import { ContactForm } from "./components";
const Contact = ({ HelmetTitle }) => {
    const [loading, setLoding] = useState(false)
    useEffect(() => {
        setLoding(true)
        return () => {
            setLoding(false)
        }
    }, [])
    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Helmet>
                <title>{HelmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    aling="center"
                    bColor="warning.main"
                    cColor="warning"
                    text="ارتباط با من"
                    icon={<AccountCircle />}
                />

                <Grid container sx={{ mt: 5 }}>
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "99ms" : "0ms"
                        }}
                    >
                        <Grid xs={12} sx={12} md={8}>
                            <Card
                                sx={{
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                {/* Contact Form */}
                                <ContactForm />
                            </Card>
                        </Grid>

                    </Slide>
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "200ms" : "0ms",
                        }}
                    >
                        <Grid
                            xs={0}
                            sm={0}
                            md={4}
                            sx={{
                                textAlign: "center",
                                backgroundImage: `url(${worldMap})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        >
                            <Typography
                                variant="h6"
                                color="black"
                                sx={{
                                    fontFamily: "vazir",
                                    mt: 4,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}
                            >
                                بیا در مورد همه چیز باهم صحبت کنیم
                            </Typography>
                            <Typography
                                variant="body1"
                                color="black"
                                sx={{
                                    mt: 2,
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}
                            >
                                👋{" "}
                                <a
                                    href="mailto:younes.gh@chmail.ir"
                                    alt="email"
                                    style={{
                                        color: "tomato",
                                    }}
                                >
                                    ایمیل
                                </a>{" "}
                                بزن به من
                            </Typography>
                        </Grid>
                    </Slide>
                </Grid>
            </CardContent>


        </Card>
    );
}

export default Contact;