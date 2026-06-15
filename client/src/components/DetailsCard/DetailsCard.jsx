import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { baseURL } from "../../config/common";

export default function DetailsCard({ name, description, image, redirectTo }) {
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const cover = image && image[0]
    ? `${baseURL}${image[0]}`
    : "https://media.licdn.com/dms/image/v2/D5612AQGzdmQBNdlU5g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681324548301?e=1732752000&v=beta&t=V6xKS-11OfqiI86N0S3jTjcGsH_VhGUAdnFEmQIBDDQ";

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        background: "var(--color-surface)",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid var(--color-line)",
        boxShadow: "var(--shadow-sm)",
        transition: "transform .4s var(--ease-out), box-shadow .4s var(--ease-out)",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "var(--shadow-lg)",
        },
        "&:hover .card-img": { transform: "scale(1.08)" },
        "&:hover .card-go": { transform: "translateX(4px)" },
      }}
      onClick={redirectTo}
    >
      <Box sx={{ position: "relative", overflow: "hidden", aspectRatio: "16 / 10" }}>
        <Box
          className="card-img"
          component="img"
          src={cover}
          alt={name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform .8s var(--ease-out)",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(26,16,51,0) 50%, rgba(26,16,51,0.4) 100%)",
            pointerEvents: "none",
          }}
        />
      </Box>
      <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "var(--color-ink)",
            mb: 1,
            lineHeight: 1.35,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: "13.5px",
            color: "var(--color-muted)",
            lineHeight: 1.6,
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {stripHtmlTags(description)}
        </Typography>
        <Button
          className="card-go"
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            redirectTo();
          }}
          endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
          sx={{
            alignSelf: "flex-start",
            mt: 2,
            textTransform: "none",
            color: "var(--color-primary)",
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontWeight: 700,
            fontSize: "13.5px",
            transition: "transform .25s var(--ease-out)",
            px: 0,
            "&:hover": { background: "transparent" },
          }}
        >
          View Details
        </Button>
      </Box>
    </Box>
  );
}
