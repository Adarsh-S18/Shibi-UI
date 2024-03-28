import Grid from '@mui/material/Grid';
import { Icon, Typography, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Header() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <Box sx={{
  // backgroundImage: 'linear-gradient(185deg, #EF84B9  5%, #FFFFED 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px',
  borderRadius: '20px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  gap: '20px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)',
  }
}}>
          <Box sx={{ flex: 2, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ marginBottom: '10px', color: '#333', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '0.05em' }}>
              Shibi Anand
            </Typography>
            <Typography variant="body1" sx={{ color: 'black', fontSize: '20px', marginBottom: '18px', fontFamily: 'Arial, sans-serif', letterSpacing: '0.03em' }}>
              Edupreneur & Mentor | Founder of N'Able and AI Teacher Community
            </Typography>
            <Typography variant="body1" sx={{ color: '#333', fontSize: '22px', marginBottom: '20px', fontFamily: 'Arial, sans-serif', letterSpacing: '0.03em', lineHeight: '1.5' }}>
              Navigate the evolving landscape of education with N'Able by Shibi Anand – Empowering minds, reshaping classrooms, and seamlessly adapting to the dynamic future of learning.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Icon sx={{ margin: '10px', color: '#3b5998', fontSize: '32px' }}>
                <FacebookIcon />
              </Icon>
              <Icon sx={{ margin: '10px', color: '#98008F', fontSize: '32px' }}>
                <InstagramIcon />
              </Icon>
              <Icon sx={{ margin: '10px', color: 'red', fontSize: '32px' }}>
                <YouTubeIcon />
              </Icon>
              <Icon sx={{ margin: '10px', color: '#0077B5', fontSize: '32px' }}>
                <LinkedInIcon />
              </Icon>
            </Box>
          </Box>
          <Box sx={{ flex: 1, position: 'relative' }}>
            <img 
              src='/personal.jpg' 
              style={{ borderRadius: '50%', width: '400px', height: '400px', transition: 'transform 0.5s ease' }} 
              alt="Profile" 
              // Adding hover effect
              onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} 
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
  