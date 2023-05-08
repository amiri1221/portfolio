import { Helmet } from 'react-helmet-async';
import {
    Card,
    CardContent,
} from "@mui/material";
import CustomDivider from "../common/CustomDivider";
import SourceRoundedIcon from '@mui/icons-material/SourceRounded';
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import { ShowSamplework } from './components';
const SampleWork = ({ HelmetTitle }) => {
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
                    text="نمونه کارهای من"
                    icon={<SourceRoundedIcon />}
                />

                <Grid container sx={{ mx: 3, mt: 5 }} >
                  {/*  */}
                  <ShowSamplework loading={loading}/>
                </Grid>

            </CardContent>
        </Card>
    )
}
export default SampleWork;