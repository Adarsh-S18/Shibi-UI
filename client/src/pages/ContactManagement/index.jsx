import React from 'react';
import { Container, Grid, TextField, Button, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, Headset, Email, LocationOn } from '@mui/icons-material';

export default function ContactManagement() { 
  return (
    <>
      <section className="contact_us">
        <Container>
          <Grid container justifyContent="center">
            <Grid item md={10}>
              <div className="contact_inner">
                <Grid container spacing={2}>
                  <Grid item md={10}>
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <Typography variant="h3">Contact Us</Typography>
                        <Typography variant="body1">
                          Feel Free to contact us any time. We will get back to you as soon as we can!
                        </Typography>
                        <TextField
                          fullWidth
                          label="Name"
                          variant="outlined"
                          className="form-group"
                          margin="normal"
                        />
                        <TextField
                          fullWidth
                          label="Email"
                          variant="outlined"
                          className="form-group"
                          margin="normal"
                        />
                        <TextField
                          fullWidth
                          label="Message"
                          variant="outlined"
                          className="form-group"
                          margin="normal"
                          multiline
                          rows={4}
                        />
                        <Button variant="contained" color="primary" className="contact_form_submit">
                          Send
                        </Button>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={2}>
                    <div className="right_contact_social_icon d-flex align-items-end">
                      <div className="social_item_inner d-flex">
                        <IconButton href="#" color="primary">
                          <Facebook />
                        </IconButton>
                        <IconButton href="#" color="primary">
                          <Instagram />
                        </IconButton>
                        <IconButton href="#" color="primary">
                          <Twitter />
                        </IconButton>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <div className="contact_info_sec">
                  <Typography variant="h4">Contact Info</Typography>
                  <div className="d-flex info_single align-items-center">
                    <Headset />
                    <Typography variant="body1" component="span">
                      +91 8009 054294
                    </Typography>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <Email />
                    <Typography variant="body1" component="span">
                      info@flightmantra.com
                    </Typography>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <LocationOn />
                    <Typography variant="body1" component="span">
                      1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
