import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { baseURL } from "../../config/common";

const AccountManagement = () => {
  const [state, setState] = useState(false);
  const [pictureUpdate, setPictureUpdate] = useState(false);
  console.log(pictureUpdate);
  const [newImagePreviews, setNewImagePreviews] = useState([]);
  const [newImages, setNewImages] = useState([]);

  const [newText, setNewText] = useState(""); // Single text entry
  const [textEntries, setTextEntries] = useState([]); // List of text entries (e.g., teacher, plumber)
  const [accountDetails, setAccountDetails] = useState([]);
  console.log(accountDetails);

  useEffect(() => {
    fetchAccountDetails();
  }, []);

  const fetchAccountDetails = async () => {
    try {
      const response = await fetch(`${baseURL}/api/accounts/get-details`); // Mocked for simplicity
      const data = await response.json();
      console.log(data);
      setAccountDetails(data);
    } catch (error) {
      console.error("Error fetching Account details:", error);
    }
  };

  const handleDeleteTextEntry = (index) => {
    const updatedEntries = textEntries.filter((_, i) => i !== index);
    setTextEntries(updatedEntries);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newText.trim()) {
        const response = await fetch(`${baseURL}/api/accounts/add-details`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ entry: newText.trim() }), // Send single text entry as string
        });

        if (response.ok) {
          setNewText(""); // Reset input field
          fetchAccountDetails(); // Refresh account details
        } else {
          console.error("Failed to submit data:", response.statusText);
        }
      }
      setState(false);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleImageSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", newImages);
    newImages.forEach((file) => {
      formData.append("files[]", file);
    });
    try {
      const response = await fetch(`${baseURL}/api/accounts/add-profile`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        await response.json();
        setPictureUpdate(false);
        setNewImages([]);
        setNewImagePreviews([]);
        fetchAccountDetails();
      } else {
        console.error("Failed to upload update:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading :", error);
    }
  };

  const handleDeleteDbEntry = async (index) => {
    console.log(index);
    await fetch(`${baseURL}/api/accounts/delete-details/${index}`, {
      method: "DELETE",
    });
    fetchAccountDetails();
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setNewImages([...newImages, ...selectedFiles]);
    setNewImagePreviews([...newImagePreviews, ...previews]);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setState(true)}
        >
          Add Entry
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setPictureUpdate(true)}
          sx={{ marginLeft: "10px" }}
        >
          Profile Picture
        </Button>
      </Box>

      <Grid container spacing={2}>
        {accountDetails?.details?.map((entry, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                position: "relative",
                "&:hover .delete-btn": {
                  opacity: 1,
                },
              }}
            >
              <Typography variant="body1" sx={{ padding: 2 }} align="center">
                {entry}
              </Typography>
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
                  onClick={() => handleDeleteDbEntry(index)}
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
              Add Entry
            </Typography>

            <Grid container spacing={2} mb={2}>
              {textEntries.map((entry, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      position: "relative",
                      "&:hover .delete-btn": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ padding: 2 }}
                      align="center"
                    >
                      {entry}
                    </Typography>
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
                        onClick={() => handleDeleteTextEntry(index)}
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
              <TextField
                fullWidth
                label="Enter text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
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
      {pictureUpdate && (
        <Modal
          open={pictureUpdate}
          onClose={() => setPictureUpdate(false)}
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
              Add Profile Image
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
                    ></CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <form onSubmit={handleImageSubmit}>
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

export default AccountManagement;
