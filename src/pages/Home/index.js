import React from 'react';
import { Container, CssBaseline, Stack } from "@mui/material";
// import { PaperContainer } from "../components/PaperContainer";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Stack>
        <CssBaseline />
        <Container maxWidth="xl">
          {/* <PaperContainer /> */}
        </Container>
      </Stack>
    </>
  )
}

export default HomePage;