import React, { useEffect, useState } from "react";
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
  // Background images fetched from the DB (you will fetch these from your API)
  const [dbImages, setDbImages] = useState([
    "https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2022/07/8-Effective-Ways-To-Get-Employee-Feedback-Featured-Image-1-1200x630.png",
    "https://peoplemanagingpeople.com/wp-content/uploads/sites/3/2022/07/8-Effective-Ways-To-Get-Employee-Feedback-Featured-Image-1-1200x630.png",
    "https://www.shutterstock.com/image-vector/customer-loyalty-consumer-satisfaction-giving-260nw-2437456199.jpg",
    "https://www.newbreedrevenue.com/hs-fs/hubfs/shutterstock_695711272.jpg?width=5001&name=shutterstock_695711272.jpg",
    "https://t3.ftcdn.net/jpg/03/76/66/16/360_F_376661672_OUk4ws66zUuVkOsb9hnbC5Mcg1NjrCI6.jpg",
  ]);

  // Modal state to handle new uploads
  const [state, setState] = useState(false);
  const [newImages, setNewImages] = useState([]); // Store selected images inside the modal
  const [newImagePreviews, setNewImagePreviews] = useState([]); // Preview images for the modal
  const [feedbackImages, setFeedbackImages] = useState([]);

  console.log(feedbackImages);
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/feedbacks/get-feedbacks"
      );
      const data = await response.json();
      setFeedbackImages(data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setNewImages([...newImages, ...selectedFiles]);
    setNewImagePreviews([...newImagePreviews, ...previews]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(newImages);
    const formData = new FormData();
    formData.append("image", newImages);
    console.log(formData);
    newImages.forEach((file) => {
      formData.append("files[]", file);
    });
    try {
      const response = await fetch(
        "http://localhost:5000/api/feedbacks/add-feedback",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("API Response:", data);
        setState(false);
        setNewImages([]);
        setNewImagePreviews([]);
        fetchFeedbacks();
      } else {
        console.error("Failed to upload update:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading :", error);
    }
  };

  const handleModalDelete = (index) => {
    const updatedImages = newImages.filter((_, i) => i !== index);
    const updatedPreviews = newImagePreviews.filter((_, i) => i !== index);
    setNewImages(updatedImages);
    setNewImagePreviews(updatedPreviews);
  };

  const handleDeleteDbImage = (index) => {
    const newDbImages = dbImages.filter((_, i) => i !== index);
    setDbImages(newDbImages);
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Add Image Button */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setState(true)}
        >
          Add
        </Button>
      </Box>

      {/* Background Images Grid (Images fetched from DB) */}
      <Grid container spacing={2}>
        {feedbackImages.map((img, index) => (
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
                image={`http://localhost:5000${img}`}
                alt={`Feedback Image ${index + 1}`}
              />
              <CardActions
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                className="delete-btn"
              >
                <IconButton
                  color="error"
                  onClick={() => handleDeleteDbImage(index)}
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
          onClose={() => setState(false)}
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
              Add Feedback Image
            </Typography>

            <Grid container spacing={2} mb={2}>
              {newImagePreviews.map((img, index) => (
                <Grid item xs={12} sm={6} key={index}>
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
                      height="100"
                      image={img}
                      alt={`New Image Preview ${index + 1}`}
                    />
                    <CardActions
                      sx={{
                        position: "absolute",
                        top: 5,
                        right: 5,
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                      className="delete-btn"
                    >
                      <IconButton
                        color="error"
                        onClick={() => handleModalDelete(index)}
                        sx={{ bgcolor: "rgba(255,255,255,0.8)" }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <form onSubmit={handleSubmit}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload">
                <Button
                  variant="contained"
                  color="secondary"
                  component="span"
                  fullWidth
                >
                  Upload Images
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
