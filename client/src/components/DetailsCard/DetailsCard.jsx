import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { baseURL } from "../../config/common";

export default function DetailsCard({ name, description, image, redirectTo }) {
  // Function to remove HTML tags
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`${baseURL}${image[0]}`}
        title="Image"
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
          {stripHtmlTags(description)} {/* Display plain text */}
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

