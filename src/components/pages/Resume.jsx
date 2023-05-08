import { Card, CardContent} from "@mui/material";
import { Helmet } from 'react-helmet-async';
import { SettingsEthernetRounded, HomeRepairServiceRounded, SchoolRounded } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import CustomDivider from "../common/CustomDivider";
import { DevEduTimeline, DevExpTimeline } from "./components";
const Resume = ({ HelmetTitle }) => {
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
                overflowY: "scroll"
            }}
        >

            <Helmet>
                <title>{HelmetTitle}</title>
            </Helmet>

            <CardContent>
                <CustomDivider
                    aling="center"
                    bColor="error.main"
                    cColor="error"
                    text="  رزومه من"
                    icon={<SettingsEthernetRounded />}
                />
                <Grid container sx={{ mt: 4 }}>
                    <Grid xs={6}>
                        <CustomDivider
                            aling="center"
                            bColor="warning.main"
                            cColor="warning"
                            text="تجربیات"
                            icon={<HomeRepairServiceRounded />}
                        />
                        {/* devexptimeline */}
                        <DevExpTimeline loading={loading}/>
                    </Grid>
                    <Grid xs={6}>
                        <CustomDivider
                            aling="center"
                            bColor="info.main"
                            cColor="info"
                            text="تحصیلات"
                            icon={<SchoolRounded />}
                        />
                         {/* devexptimeline */}
                         <DevEduTimeline loading={loading}/>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}
export default Resume