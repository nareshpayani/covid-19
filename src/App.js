import { FormControl, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
        <h1>COVID-19 TRACKER</h1>

        <FormControl className="app__dropdown">
          <Select variant="outlined" value="">
            <MenuItem value="Worldwide">Worldwide</MenuItem>
            <MenuItem value="">India</MenuItem>
            <MenuItem value="">US</MenuItem>
            <MenuItem value="">Brazil</MenuItem>
            <MenuItem value="">America</MenuItem>
          </Select>
        </FormControl>

        {/* Headder */}

        {/* Info Box */}

        {/* Table */}

        {/* Chart */}

        {/* Map */}
    </div>
  );
}

export default App;
