    import React, { useState, useEffect } from 'react';
    import { 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody, 
    Typography,
    Button,
    Box
    } from '@mui/material';

    const AmortizationTable = ({ principal, rate, months, currency, onReset }) => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        if (principal && rate && months) {
        calculateAmortization();
        }
    }, [principal, rate, months]);

    const calculateAmortization = () => {
        const monthlyRate = rate / 12 / 100;
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

        let balance = principal;
        const calculatedRows = [];

        for (let i = 1; i <= months; i++) {
        const interest = balance * monthlyRate;
        const principalComponent = emi - interest;
        balance -= principalComponent;
        calculatedRows.push({
            month: i,
            principal: principalComponent.toFixed(2),
            interest: interest.toFixed(2),
            balance: balance.toFixed(2),
        });
        }

        setRows(calculatedRows);
    };

    if (!principal || !rate || !months) {
        return null;
    }

    return (
        <Box mt={4}>
        <Typography variant="h6" gutterBottom>
            Amortization Schedule ({currency})
        </Typography>
        
        <Table size="small" sx={{ mb: 2 }}>
            <TableHead>
            <TableRow>
                <TableCell>Month</TableCell>
                <TableCell>Principal ({currency})</TableCell>
                <TableCell>Interest ({currency})</TableCell>
                <TableCell>Remaining Balance ({currency})</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.month}>
                <TableCell>{row.month}</TableCell>
                <TableCell>{row.principal}</TableCell>
                <TableCell>{row.interest}</TableCell>
                <TableCell>{row.balance}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        
        <Box display="flex" justifyContent="flex-end">
            <Button 
            variant="outlined" 
            onClick={onReset}
            sx={{ mb: 2 }}
            >
            RESET TABLE
            </Button>
        </Box>
        </Box>
    );
    };

    export default AmortizationTable;