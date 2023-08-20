import React from 'react';
import FacebookIcon from '@mui/icons-material/FacebookIcon;
import InstagramIcon from '@mui/icons-material/InstagramIcon';
import TwitterIcon from '@mui/icons-material/TwitterIcon';
import YouTubeIcon from '@mui/icons-material/YouTubeIcon';
import { Box, Typography } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: '#c05c44',
        color: '#fff',
        py: 3,
        width: '100%',
      }}
    >
      <Box
        sx={{
          my: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& svg': {
            fontSize: '60px',
            cursor: 'pointer',
            mx: 2,
          },
          '& svg:hover': {
            color: '#000',
            transform: 'translateY(-5px)',
            transition: 'all 400ms',
          },
        }}
      >
        {/* icons */}
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </Box>
      <Typography
        variant="h5"
        sx={{
          '@media (max-width:600px)': {
            fontSize: '1rem',
          },
        }}
      >
        All good collection
      </Typography>
    </Box>
  );
};

export default Footer;