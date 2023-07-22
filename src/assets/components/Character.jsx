import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Character({name, image}) {
    return(
        <Card >
        <CardMedia
        image={image}
        title='Rick Sanchez'
        sx={{
          height:250, width:250
        }}/>
        <CardContent >
          <Typography variant="h6">{name}</Typography>
        </CardContent>
      </Card>
    )
}