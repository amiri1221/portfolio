import { courses } from "../../../constants/courses";
import EllipsisText from "react-ellipsis-text";
import {
    Typography,
    Card,
    CardContent,
    CardActionArea,
    CardActions,
    Button,
    CardMedia,
    Divider,
    Chip,
    Slide,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
const ShowSamplework = ({loading}) => {
    return (
        <>
            {
                courses.map((courses, index) => (
                    <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 3 }}  >

                        <Slide direction="up" in={loading} style={{
                            transitionDelay: loading ? `${index + 3}99ms` : "0ms"
                        }} >
                            <Card sx={{ maxWidth: 345, backgroundColor: "steelblue" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        width="200"
                                        image={courses.image}
                                        alt={courses.title}
                                    />
                                    <CardContent>
                                        <Typography variant="body1" textAlign="left" gutterBottom >
                                            {courses.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            textAlign="left"
                                            gutterBottom
                                            sx={{ direction: "ltr" }}
                                        >

                                            <EllipsisText text={courses.info} length={"85"} />
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button href={courses.link} size="small" color="primary" target="_blank">
                                        اطلاعات بیشتر
                                    </Button>
                                </CardActions>
                            </Card>
                        </Slide>

                    </Grid>
                ))
            }
        </>
    );
}

export default ShowSamplework;