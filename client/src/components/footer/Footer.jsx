import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, List, ListItem } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')({
  backgroundColor: '#282c34',
  color: 'white',
  padding: '30px 0',
});

const FooterSection = styled(Box)({
  marginBottom: '20px',
});

const SubscribeContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
});

const DownloadList = styled(List)({
  padding: 0,
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FooterSection>
              <Typography variant="h5" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" paragraph>
                Contact me for any further queries or concerns!
              </Typography>
              <SubscribeContainer>
              <TextField
                  type="email"
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                  sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, '& input': { color: 'white' }}}
                />
                <Button variant="contained" color="primary" sx={{ marginLeft: '10px' }}>
                  Contact
                </Button>
              </SubscribeContainer>
            </FooterSection>
          </Grid>

          <Grid item xs={12} md={3}>
            <FooterSection>
              <Typography variant="h5" gutterBottom>
                Quick Links
              </Typography>
              <DownloadList>
                {['Home', 'About', 'Services', 'Workshops', 'Testimonials','Contact'].map((item, index) => (
                  <ListItem style={{fontFamily: 'arial'}} key={index}>{item}</ListItem>
                ))}
              </DownloadList>
            </FooterSection>
          </Grid>

          <Grid item xs={12} md={3}>
            <FooterSection>
              <Typography variant="h5" gutterBottom>
                Help
              </Typography>
              <List>
                {['Home', 'About', 'Services', 'Workshops', 'Testimonials','Contact'].map((item, index) => (
                  <ListItem  style={{fontFamily: 'arial'}} key={index}>{item}</ListItem>
                ))}
              </List>
            </FooterSection>
          </Grid>
        </Grid>
        <Grid xs={12}>
        Copyright 2024 © Shibi Anand
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
