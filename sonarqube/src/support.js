import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Logo from './hero12.png'
import * as React from 'react';

const Support = () => {
  return (
    <>
      <Container maxWidth='xl' sx={{ display: 'flex', height: '100vh'}}>
        <Box sx={{ height: '100%', background: 'linear-gradient(to right bottom, #FFFFFF, #D6FBE0 )' }}>
          <Grid container spacing={{ xs: 2, md: 3, lg: 3 }} lg={12} sx={{ padding: { lg: "30px" } }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box sx={{ width: "100%", padding: { lg: "50px" } }}>
                <Stack sx={{ width: "100%" }} spacing={2}>

                  <Box sx={{ alignSelf: { lg: 'normal', xs: 'center' } }} style={{ display: "flex", gap: "15px" }}>

                    <Stack sx={{ width: "100%" }} spacing={2}>
                      <Box component="img" src={Logo} alt="Comeonda" width="170px" height="170px" sx={{ marginLeft: { lg: '0px', xs: 'auto' }, marginRight: { lg: '0px', xs: 'auto' } }} />
                      <Typography sx={{ textAlign: { lg: 'initial', xs: 'center' } }}><h1>Support</h1></Typography>
                      <Typography sx={{
                        width: { lg: '80%', md: '100%', xs: '90%' },
                        textAlign: { lg: 'initial', xs: 'center' },
                        padding: { lg: "0px", xs: "18px" }
                      }}>
                        Come On Da (COD) is a fun app which lets you challenge your friends and family. It is a social prediction game for sports, and general topics and events. COD is a great way to stay connected and engage with your peers using the fun element of gambling. The app connects the users to small retail businesses thereby allowing the business owners to promote their business/ store with a wide outreach.
                        The word 'Da' in the app name is derived from South Indian language which translates to "buddy/ mate". It is a common term used in the southern states of India to both challenge and encourage your peers. So without further ado, download COD and dare your peers saying 'ComeOnDa'
                      </Typography>

                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>

  );
};

export default Support;