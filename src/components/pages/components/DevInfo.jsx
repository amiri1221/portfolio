import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material"
const Info = ({ children }) => {
    return (
        <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }} >
            {children}
            <KeyboardArrowLeftRounded sx={{ verticalAlign: "bottom", color: "primary.main" }} />
        </Typography>
    )
}

const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی : امیرحسین رفیعی</Info>
            <Info> سن : 19</Info>
            <Info>شهر : تهران</Info>
        </>
    );
}

export default DevInfo;
