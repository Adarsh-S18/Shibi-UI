import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import Footer from '../footer/Footer';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <>
      <Grid container spacing={3} justifyContent="center" alignItems="center" mt={3} mb={5} pb={5}>
        <Grid item xs={12} md={4} textAlign="center" pb={5} sx={{ border: '1px solid #ccc',    boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)',  borderRadius: '30px', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: '0px 0px 10px 0px #000000' } }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'arial', color: '#0066cc', marginTop: '20px' }}>
            Contact Us
          </Typography>
          <Typography paragraph sx={{ fontFamily: 'arial', fontSize: '16px', color: '#333', marginTop: '10px' }}>
            Feel free to reach out to us using the contact form below.
          </Typography>
          <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
            <TextField label="Your Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Your Email" type="email" variant="outlined" fullWidth margin="normal" />
            <TextField label="Message" multiline rows={4} variant="outlined" fullWidth margin="normal" />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Contact;
