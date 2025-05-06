import React, { useState } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import EMIForm from '../components/EMIForm';
import AmortizationTable from '../components/AmortizationTable';

const Home = () => {
  const [result, setResult] = useState(null);
  const [showTable, setShowTable] = useState(false);

  const handleCalculate = (data) => {
    setResult(data);
    setShowTable(true);
  };

  const handleResetTable = () => {
    setShowTable(false);
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <EMIForm onCalculate={handleCalculate} />
        
        {result && showTable && (
          <>
            <Typography variant="h5" mt={4} gutterBottom>
              Monthly EMI: {result.emi} {result.currency}
            </Typography>
            
            <AmortizationTable
              principal={+result.principal}
              rate={+result.rate}
              months={+result.months}
              currency={result.currency}
              onReset={handleResetTable}
            />
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Home;