import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const FormModal = (open, closeModal) => {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal
      open={open}
      setState
      onClose={closeModal}
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
        <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
          Enter Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Field 1"
            variant="outlined"
            margin="normal"
            value={field1}
            onChange={(e) => setField1(e.target.value)}
          />
          <TextField
            fullWidth
            label="Field 2"
            variant="outlined"
            margin="normal"
            value={field2}
            onChange={(e) => setField2(e.target.value)}
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
  );
};

export default FormModal;
