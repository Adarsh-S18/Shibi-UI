import React, { useEffect, useState } from "react";
import {
  Button,
  // IconButton,
  Typography,
  Box,
  Modal,
  TextField,
  Grid,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import { baseURL } from "../../config/common";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles for Quill
import ClearIcon from "@mui/icons-material/Clear"; // Import Clear icon for delete

const WorkshopsManagement = () => {
  const [state, setState] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [newUpdate, setNewUpdate] = useState(false);
  const [rows, setRows] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]); // Preview URLs
  const [files, setFiles] = useState([]); // Actual files
  const [editId, setEditId] = useState(null); // To track which workshop is being edited
  const [workshopToDelete, setWorkshopToDelete] = useState(null); // To store the workshop ID
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [newUpdatesData, setNewUpdatesData] = useState({
    youtubeLink: "",
    image: null,
  });

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const columns = [
    { field: "name", headerName: "Name", width: 400 },
    {
      field: "description",
      headerName: "Description",
      width: 500,
      renderCell: (params) => (
        <span>{stripHtmlTags(params.row.description)}</span>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <>
          <IconButton
            color="primary"
            sx={{ margin: "10px" }}
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(params.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const handleQuillChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const fetchWorkshops = async () => {
    try {
      const response = await fetch(`${baseURL}/api/workshops/get-workshops`);
      const data = await response.json();
      setRows(data);
    } catch (error) {
      console.error("Error fetching workshops:", error);
    }
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
    setFilePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = (workshop) => {
    setFormData({
      name: workshop.name,
      description: workshop.description,
    });
    setEditId(workshop._id);
    setFiles(workshop.images || []);
    setFilePreviews(workshop.images.map((file) => `${baseURL}${file}`)); // Update file previews
    setState(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check for name, description, and files
    if (!formData.name || !formData.description || files.length === 0) {
      alert("Please complete all fields before submitting.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);

    // Append existing and new files
    files.forEach((file) => {
      if (typeof file === "string") {
        // If the file is a URL (existing file), append it as a string
        formDataToSend.append("files[]", file);
      } else {
        // If it's a new file object, append it directly
        formDataToSend.append("files[]", file);
      }
    });

    try {
      const url = editId
        ? `${baseURL}/api/workshops/update-workshop/${editId}`
        : `${baseURL}/api/workshops/add-workshop`;

      const response = await fetch(url, {
        method: editId ? "PUT" : "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        await fetchWorkshops(); // Reload workshops after addition or update
        setState(false); // Close modal after submission
        resetForm(); // Reset form after successful submission
      } else {
        console.error("Failed to submit workshop:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting workshop:", error);
    }
  };

  const handleDeleteImage = (index) => {
    const updatedFiles = files.filter((_, idx) => idx !== index);
    const updatedPreviews = filePreviews.filter((_, idx) => idx !== index);
    setFiles(updatedFiles);
    setFilePreviews(updatedPreviews);
  };

  const resetForm = () => {
    setFormData({ name: "", description: "" });
    setFiles([]);
    setFilePreviews([]);
    setEditId(null); // Reset editId when form is reset
  };

  const handleDelete = async (id) => {
    setDeleteModal(true);
    setWorkshopToDelete(id);
  };

  const handleDeleteWorkshop = async () => {
    await fetch(
      `${baseURL}/api/workshops/delete-workshop/${workshopToDelete}`,
      {
        method: "DELETE",
      }
    );
    setDeleteModal(false);
    setWorkshopToDelete(null);
    await fetchWorkshops();
  };

  const handleImageUpload = (event) => {
    setNewUpdatesData({ ...newUpdatesData, image: event.target.files[0] });
  };

  const handleUpdatesSubmit = async () => {
    const formData = new FormData();
    formData.append("youtubeLink", newUpdatesData.youtubeLink);
    if (newUpdatesData.image) {
      formData.append("image", newUpdatesData.image);
    }

    try {
      const response = await fetch(`${baseURL}/api/workshops/new-updates`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log("API Response:", data);
        closeUpdatesModal();
      } else {
        console.error("Failed to upload update:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading update:", error);
    }
  };

  const closeUpdatesModal = () => {
    setNewUpdate(false);
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5">Workshops Management</Typography>
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button
            variant="contained"
            color="error"
            onClick={() => setNewUpdate(true)}
          >
            What's New
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setState(true)}
          >
            Add
          </Button>
        </Box>
      </Box>

      <div style={{ height: 900, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          getRowId={(row) => row._id}
        />
      </div>
      {state && (
        <Modal
          open={state}
          onClose={() => {
            setState(false);
            resetForm(); // Reset form when modal is closed
            setFormData({ name: "", description: "" });
            setFiles([]);
            setFilePreviews([]);
            setEditId(null); // Reset the editId when closing the modal
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
              width: 900,
              bgcolor: "background.paper",
              borderRadius: 1,
              boxShadow: 24,
              p: 4,
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              mb={2}
            >
              Enter Workshop Details
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <ReactQuill
                value={formData.description}
                onChange={handleQuillChange}
                style={{ height: "200px", marginBottom: "20px" }}
              />

              {/* File Input for Multiple File Selection */}
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileChange} // Ensuring this is properly bound
              />
              <label htmlFor="file-upload">
                <Button
                  variant="contained"
                  color="secondary"
                  component="span"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Upload Files
                </Button>
              </label>

              {/* Preview Selected Images */}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {filePreviews.map((preview, index) => (
                  <Grid item xs={4} key={index} position="relative">
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "150px",
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                    {/* <IconButton
                      size="small"
                      onClick={() => handleDeleteImage(index)}
                      sx={{
                        position: "absolute",
                        top: 5,
                        right: 5,
                        bgcolor: "white",
                        "&:hover": {
                          bgcolor: "red",
                          color: "white",
                        },
                      }}
                    >
                      <ClearIcon />
                    </IconButton> */}
                  </Grid>
                ))}
              </Grid>
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
      {newUpdate && (
        <Modal open={newUpdate} onClose={closeUpdatesModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              borderRadius: "8px",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" mb={2}>
              Add What's New Update
            </Typography>
            <TextField
              fullWidth
              label="YouTube Link"
              variant="outlined"
              value={newUpdatesData.youtubeLink}
              onChange={(e) =>
                setNewUpdatesData({
                  ...newUpdatesData,
                  youtubeLink: e.target.value,
                })
              }
              margin="normal"
            />
            <Typography variant="h6" mb={2} sx={{ textAlign: "center" }}>
              OR
            </Typography>
            <Button
              variant="contained"
              component="label"
              color="error"
              fullWidth
              sx={{ mb: 2 }}
            >
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Button>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleUpdatesSubmit}
            >
              Submit
            </Button>
          </Box>
        </Modal>
      )}

      {deleteModal && (
        <Modal open={deleteModal} onClose={() => setDeleteModal(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              borderRadius: "8px",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" mb={2}>
              Are you sure you want to delete this workshop ?
            </Typography>
            <Button
              variant="contained"
              component="label"
              color="primary"
              fullWidth
              sx={{ mb: 2 }}
              onClick={handleDeleteWorkshop}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              component="label"
              color="error"
              fullWidth
              onClick={() => setDeleteModal(false)}
              sx={{ mb: 2 }}
            >
              No
            </Button>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default WorkshopsManagement;
