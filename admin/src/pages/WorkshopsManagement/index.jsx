import React, { useState } from "react";
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

  const rows = [
    { id: 1, name: "Workshop 1", description: "Description for Workshop 1" },
    { id: 2, name: "Workshop 2", description: "Description for Workshop 2" },
  ];

  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Field 1:", field1);
    console.log("Field 2:", field2);
    // Close the modal after submission
    setState(false);
  };

  const handleEdit = (id) => {
    console.log(`Edit row with id ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete row with id ${id}`);
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
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
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
              Enter Workshop Details
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                value={field1}
                onChange={(e) => setField1(e.target.value)}
              />
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                margin="normal"
                value={field2}
                onChange={(e) => setField2(e.target.value)}
              />
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
    </div>
  );
};

export default WorkshopsManagement;
