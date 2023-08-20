import React from 'react';
import Layout from '../componets/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: 'center',
          p: 2,
          '& h4': {
            fontWeight: 'bold',
            my: 2,
            fontSize: '2rem',
          },
          '& p': {
            textAlign: 'justify',
          },
          '@media (max-width:600px)': {
            mt: 0,
            '& h4 ': {
              fontSize: '1.5rem',
            },
          },
        }}
      >
        <Typography variant="h4">ABOUT US</Typography>
        <p>
          The concept of Copper kitchen was drawn from Ahlan Foodpreneurs, the
          idea was to create an authentic North & South Non-Veg restaurant
          specialized in Chettinad, Tandoor, Andhra and lip-smacking barbecues
          with great taste, grand ambience and unmatched services to provide you
          a memorable dining experience. Tamil Muslim wedding Biriyani.
        </p>
        <br />
        <p>
          South Indian seafood dishes are the unique attractions of the menu.
          The concept of 'Copper kitchen' was established in 2011 with strong
          focus and commitment towards quality, exceptional service and warm
          hospitality, employs a team of highly skilled & experienced chefs and
          supported by a strong management team different levels to ensure it
          meets the standards. With due emphasis laid on quality, service &
          hygiene, Copper Kitchen is committed to Food Safety & Standards and
          strictly implements FSSAI : 2006 across the chain of restaurants and
          is periodically audited.
        </p>
        <br />
        <p>
          Delicious food is more than just sustenance; it's a sensory journey
          that tantalizes the taste buds, ignites emotions, and creates lasting
          memories. It's the artful marriage of flavors, textures, and aromas
          that can transport you to distant lands or evoke cherished moments.
          Whether it's the rich spices of Indian cuisine, the delicate layers of
          a French pastry, or the umami-packed simplicity of Japanese sushi,
          every culture and cuisine has its own unique way of crafting
          delectable delights.
        </p>
      </Box>
    </Layout>
  );
};

export default About;