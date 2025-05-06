import React from 'react';
import { Container, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h3" mt={4}>404 - Page Not Found</Typography>
      <Typography>Sorry, the page you are looking for doesn't exist.</Typography>
    </Container>
  );
};

export default NotFound;
