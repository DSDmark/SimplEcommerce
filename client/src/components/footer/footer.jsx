import React from 'react';
import styled from '@mui/material/styles/styled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { shades } from '~/utils/theme';

const FooterContainer = styled(Box)({
  backgroundColor: shades.pri[500],
  color: shades.sco[100],
  marginTop: "1rem",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '50px 0',
});

const SocialLink = styled(Link)({
  color: shades.sco[200],
  margin: '0 10px',
  '&:hover': {
    color: shades.con[500],
  },
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center">
              <img
                src="https://freepngimg.com/static/img/logo.png"
                alt="Aachho"
                style={{ height: '50px', marginBottom: '20px' }}
              />
            </Box>
            <Box textAlign="center" fontSize="16px">
              123 Street Name, City Name
              <br />
              Country - 123456
              <br />
              +91 9876543210
              <br />
              info@aachho.com
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Box fontWeight="bold" fontSize="16px" marginBottom="20px">
                  COMPANY
                </Box>
                <Box>
                  <Link href="#">About Us</Link>
                </Box>
                <Box>
                  <Link href="#">Our Team</Link>
                </Box>
                <Box>
                  <Link href="#">Careers</Link>
                </Box>
                <Box>
                  <Link href="#">Blog</Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box fontWeight="bold" fontSize="16px" marginBottom="20px">
                  SUPPORT
                </Box>
                <Box>
                  <Link href="#">Contact Us</Link>
                </Box>
                <Box>
                  <Link href="#">FAQs</Link>
                </Box>
                <Box>
                  <Link href="#">Returns & Exchanges</Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box fontWeight="bold" fontSize="16px" marginBottom="20px">
                  FOLLOW US
                </Box>
                <Box display="flex" justifyContent="center">
                  <SocialLink href="#">
                    <FacebookIcon />
                  </SocialLink>
                  <SocialLink href="#">
                    <TwitterIcon />
                  </SocialLink>
                  <SocialLink href="#">
                    <InstagramIcon />
                  </SocialLink>
                  <SocialLink href="#">
                    <PinterestIcon />
                  </SocialLink>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box textAlign="center" mt={2} fontWeight="bold">
        COPYRIGHT © 2023 SIMPLECOMMERCE
      </Box>
    </FooterContainer>
  );
};

export default Footer;
