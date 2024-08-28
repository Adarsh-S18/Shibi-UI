import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  IconButton,
  Card,
  CardMedia,
  CardActions,
  Modal,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const FeedbacksManagement = () => {
  const [state, setState] = useState(false);
  const [images, setImages] = useState([
    "https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2022/07/8-Effective-Ways-To-Get-Employee-Feedback-Featured-Image-1-1200x630.png",
    "https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2022/07/8-Effective-Ways-To-Get-Employee-Feedback-Featured-Image-1-1200x630.png",
    "https://www.shutterstock.com/image-vector/customer-loyalty-consumer-satisfaction-giving-260nw-2437456199.jpg",
    "https://www.newbreedrevenue.com/hs-fs/hubfs/shutterstock_695711272.jpg?width=5001&name=shutterstock_695711272.jpg",
    "https://t3.ftcdn.net/jpg/03/76/66/16/360_F_376661672_OUk4ws66zUuVkOsb9hnbC5Mcg1NjrCI6.jpg",
  ]);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    // Close the modal after submission
    setState(false);
  };

  const handleDelete = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setState(true)}
        >
          Add
        </Button>
      </Box>
      <Grid container spacing={2}>
        {images.map((img, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                position: "relative",
                "&:hover .delete-btn": {
                  opacity: 1,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={img}
                alt={`Random Image ${index + 1}`}
              />
              <CardActions
                sx={{
                  position: "absolute",
                  top: 70,
                  right: 150,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                className="delete-btn"
              >
                <IconButton
                  color="error"
                  onClick={() => handleDelete(index)}
                  sx={{ bgcolor: "rgba(255,255,255,0.8)" }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {state && (
        <Modal
          open={state}
          onClose={() => {
            setState(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              borderRadius: 1,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              mb={2}
            >
              Enter Feedback Details
            </Typography>
            <form onSubmit={handleSubmit}>
              <input
                accept="*/*" // Allows all file types. Adjust as needed (e.g., "image/*" for images)
                style={{ display: "none" }}
                id="file-upload"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload">
                <Button
                  variant="contained"
                  color="secondary"
                  component="span"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Upload File
                </Button>
              </label>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default FeedbacksManagement;
