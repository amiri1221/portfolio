import { Divider, Box, Chip, Typography, LinearProgress,Badge } from "@mui/material";
const Skill = ({name,icon,color,value}) => {
    return (
        <>
            <Divider textAlign="right" sx={{
                "&::before,&::after": {
                    borderColor:`${color}.main`
                },
                mt:1
            }} >
                <Chip icon={
                    <Box
                        component="img"
                        src={icon}
                        sx={{ height: 30 }}
                    />
                }
                    label={name}
                    sx={{ color: "#000", p: 3 }}
                    color={color} />
            </Divider>
            <Box sx={{ display: "flex", alignItems: "center"}}>
                <Box sx={{ minWidth: 35, mr:1 }}>
                    <Typography variant="body2" color="purple">
                        <Badge
                          variant="standard"
                          badgeContent={`${Math.round(value)}%`}
                          color={color}
                        />
                        
                    </Typography>
                </Box>
                <Box sx={{width:"100%",mr:1}}>
                       <LinearProgress
                       variant="determinate"
                       value={value}
                       color={color}
                       sx={{height:10,borderRadius:2}}
                       />
                </Box>
            </Box>
        </>
    )
}
export default Skill;