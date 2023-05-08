
import { Tooltip, Typography, Box, Card, CardContent, Divider, Chip, Avatar } from "@mui/material";
import { Helmet } from 'react-helmet-async';
import Grid from "@mui/material/Unstable_Grid2";
import CountUp from "react-countup";
import { CodeOffRounded, SelfImprovementRounded } from "@mui/icons-material"
import {DevInfo , Skills} from "./components"
import { devWorkInfo } from "../../constants/details"
import CustomDivider from "../common/CustomDivider";
const About = ({ HelmetTitle }) => {
    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll"
            }}
        >

            <Helmet>
                <title>{HelmetTitle}</title>
            </Helmet>

            <CardContent>
                <Grid container sc={{ mt: 2 }} >
                    <Grid
                        xs={12}
                        sm={12}
                        md={8}
                        lg={8}
                        xl={8}
                    >
                        <CustomDivider
                            aling="right"
                            bColor="primary.main"
                            cColor="primary"
                            text="توسعه دهنده فول استک"
                            icon={<CodeOffRounded />}
                        />
                        <Grid container>
                            <Grid
                                xs={4}
                                sm={4}
                                md={3}
                                lg={3}
                                sx={{
                                    display: {
                                        "xs": "none",
                                        "sm": "block",
                                        "md": "blockّ"
                                    },
                                    mt: 2
                                }}

                            >
                                {devWorkInfo.map((item, index) => (
                                    <Box
                                        key={index}
                                        component="div"
                                        sx={{ width: 1, mb: 1 }}
                                    >
                                        <Tooltip title={item.tooltipTitle} placement="right" arrow>
                                            <Chip
                                                icon={item.icon}
                                                label={
                                                    <Typography variant="body1" color="whitesmoke" >
                                                        <CountUp
                                                            start={0}
                                                            end={item.total}
                                                            duration={2}
                                                        />
                                                    </Typography>
                                                }
                                                sx={{
                                                    p: 2,
                                                    width: 1,
                                                    backgroundColor: item.color,

                                                }}
                                            />
                                        </Tooltip>

                                    </Box>
                                ))}
                            </Grid>
                            <Grid
                                xs={12}
                                sm={8}
                                md={9}
                                lg={9}
                            >
                               <DevInfo/>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid
                        xs={0}
                        sm={0}
                        md={4}
                        lg={4}
                        xl={4}
                    >
                        <Avatar
                            variant="rounded"
                            sx={{
                                height: 250,
                                width: 250,
                                margin: "0 auto",
                                display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "block",
                                    lg: "block"
                                }
                            }}
                        >
                            AH
                        </Avatar>
                    </Grid>

                </Grid>
                <Grid container >
                    <Grid sx={{ width: 1, mt: 1 }}>
                        <CustomDivider
                            aling="center"
                            bColor="secondary.main"
                            cColor="secondary"
                            text=" مهارت های من"
                            icon={<SelfImprovementRounded />}
                        />
                        <Skills/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    )
}
export default About;