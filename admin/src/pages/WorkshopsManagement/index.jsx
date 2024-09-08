import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  Typography,
  Box,
  Modal,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";

const WorkshopsManagement = () => {
  const [state, setState] = useState(false);
  const [rows, setRows] = useState([]);
  const [file, setFile] = useState(null);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const columns = [
    { field: "name", headerName: "Name", width: 400 },
    { field: "description", headerName: "Description", width: 500 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <>
          <IconButton
            color="primary"
            sx={{ margin: "10px" }}
            onClick={() => handleEdit(params.row.id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const fetchWorkshops = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/workshops/get-workshops"
      );
      const data = await response.json();
      console.log(data);
      setRows(data);
    } catch (error) {
      console.error("Error fetching workshops:", error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    if (file) formDataToSend.append("file", file);
    try {
      if (editId) {
        await fetch(
          `http://localhost:5000/api/workshops/update-workshop/${editId}`,
          formDataToSend
        );
      } else {
        await fetch("http://localhost:5000/api/workshops/add-workshop", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }
      await fetchWorkshops();
      setState(false);
      setFormData({ name: "", description: "" });
      setFile(null);
      setEditId(null);
    } catch (error) {
      console.error("Error submitting workshop:", error);
    }
  };

  const handleEdit = (id) => {
    const workshop = rows.find((row) => row.id === id);
    setFormData({
      name: workshop.name,
      description: workshop.description,
    });
    setEditId(id);
    setState(true);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/workshops/delete-workshop/${id}`);
      await fetchWorkshops();
    } catch (error) {
      console.error("Error deleting workshop:", error);
    }
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => setState(true)}
        >
          Add
        </Button>
      </Box>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row._id}
        />
      </div>
      {state && (
        <Modal
          open={state}
          onClose={() => {
            setState(false);
            setFormData({ name: "", description: "" });
            setFile(null);
            setEditId(null);
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
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                margin="normal"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4} // Adjusts the height of the textarea
              />
              <input
                accept="*/*"
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
    </div>
  );
};

export default WorkshopsManagement;
