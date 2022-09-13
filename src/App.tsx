import { useState, useEffect } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import './App.css'
import { DateRange, LocalizationProvider, StaticDateRangePicker } from '@mui/x-date-pickers-pro';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Dayjs } from 'dayjs';


// https://hypeserver.github.io/react-date-range/

function App() {
  const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);

  useEffect(() => {
    const div = document.querySelector('.MuiPickerStaticWrapper-content.css-4l7j15');
    console.log(div);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  );
}

export default App
