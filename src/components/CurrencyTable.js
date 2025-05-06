import React, { useContext, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Typography } from '@mui/material';
import useCurrencyRates from '../hooks/useCurrencyRates';
import { GlobalContext } from '../context/GlobalContext';

const CurrencyTable = ({ emi }) => {
  const { currency } = useContext(GlobalContext);
  const { rates, loading } = useCurrencyRates(currency);
  const [page, setPage] = useState(0);

  const rowsPerPage = 10;
  const rateEntries = Object.entries(rates);

  if (loading) return <Typography>Loading exchange rates...</Typography>;

  return (
    <>
      <Typography variant="h6" mt={4}>EMI Converted to Other Currencies</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Converted EMI</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rateEntries
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(([code, rate]) => (
              <TableRow key={code}>
                <TableCell>{code}</TableCell>
                <TableCell>{(emi * rate).toFixed(2)}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={rateEntries.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10]}
      />
    </>
  );
};

export default CurrencyTable;
