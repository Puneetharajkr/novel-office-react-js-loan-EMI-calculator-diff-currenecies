import React, { useState, useContext } from 'react';
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl 
} from '@mui/material';
import useEMICalculator from '../hooks/useEMICalculator';
import { GlobalContext } from '../context/GlobalContext';

const EMIForm = ({ onCalculate }) => {
  const { currency, setCurrency } = useContext(GlobalContext);
  const { calculateEMI } = useEMICalculator();
  const [formData, setFormData] = useState({ 
    principal: '', 
    rate: '', 
    months: '' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { principal, rate, months } = formData;
    const emi = calculateEMI(Number(principal), Number(rate), Number(months));
    onCalculate({ ...formData, emi, currency });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mt={2}>
      <Typography variant="h6" gutterBottom>Loan EMI Calculator</Typography>
      
      <TextField
        label="Loan Amount"
        name="principal"
        value={formData.principal}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      
      <TextField
        label="Annual Interest Rate (%)"
        name="rate"
        value={formData.rate}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      
      <TextField
        label="Loan Term (Months)"
        name="months"
        value={formData.months}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      
      <FormControl fullWidth margin="normal">
        <InputLabel>Currency</InputLabel>
        <Select
          value={currency}
          label="Currency"
          onChange={(e) => setCurrency(e.target.value)}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="INR">INR</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
          <MenuItem value="JPY">JPY</MenuItem>
          <MenuItem value="CAD">CAD</MenuItem>
          <MenuItem value="AUD">AUD</MenuItem>
        </Select>
      </FormControl>
      
      <Button 
        type="submit" 
        variant="contained" 
        fullWidth
        sx={{ mt: 2 }}
      >
        CALCULATE
      </Button>
    </Box>
  );
};

export default EMIForm;