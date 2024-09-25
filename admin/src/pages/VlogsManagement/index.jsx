import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { baseURL } from "../../config/common";

const VlogsManagement = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", link: "" });
  const [rows, setRows] = useState([]);

  const columns = [
    { field: "name", headerName: "Description", width: 400 },
    { field: "link", headerName: "Link", width: 500 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <>
          {/* <IconButton
            color="primary"
            sx={{ margin: "10px" }}
            onClick={() => handleEdit(params.row.id)}
          >
            <EditIcon />
          </IconButton> */}
          <IconButton color="error" onClick={() => handleDelete(params.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${baseURL}/api/vlogs/post-vlogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Vlog added:", data);
      fetchVlogs();
      setModalOpen(false);
      setFormData({ name: "", link: "" });
    } catch (error) {
      console.error("Error adding vlog:", error);
    }
  };

  const fetchVlogs = async () => {
    try {
      const response = await fetch(`${baseURL}/api/vlogs/get-vlogs`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRows(data);
    } catch (error) {
      console.error("Error fetching vlogs:", error);
    }
  };

  useEffect(() => {
    fetchVlogs();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [deleteModal, setDeleteModal] = useState(false);
  const [vlogToDelete, setVlogToDelete] = useState(null);

  const handleDelete = async (id) => {
    setDeleteModal(true);
    setVlogToDelete(id);
  };

  const handleDeleteVlog = async () => {
    await fetch(`${baseURL}/api/vlogs/delete-vlogs/${vlogToDelete}`, {
      method: "DELETE",
    });
    setDeleteModal(false);
    setVlogToDelete(null);
    await fetchVlogs();
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5">Vlogs Management</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModalOpen(true)}
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
      {modalOpen && (
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
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
              Enter Vlog Details
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Link"
                variant="outlined"
                margin="normal"
                name="link"
                value={formData.link}
                onChange={handleChange}
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
              Are you sure you want to delete this vlog ?
            </Typography>
            <Button
              variant="contained"
              component="label"
              color="primary"
              fullWidth
              sx={{ mb: 2 }}
              onClick={handleDeleteVlog}
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

export default VlogsManagement;
