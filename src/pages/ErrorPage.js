import React from 'react';
import { Container, Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <Container>
      <Typography variant="h3" mt={4}>Something went wrong!</Typography>
      <Typography>Please try again later or contact support.</Typography>
    </Container>
  );
};

export default ErrorPage;
