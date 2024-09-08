import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DetailsCard({ name, description, redirectTo }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.gvsu.edu/gvnext/files/img/article/E761739F-AC2B-4F0D-2216C4D0F660E3E3/E7BDEBDD-C8E2-98DF-C56C93C5076E1E8B/original.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={redirectTo}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
