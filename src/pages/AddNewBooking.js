import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DialogTitle from '@mui/material/DialogTitle';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

const EVENT_TYPE = ['Health Talk', 'Wellness Events', 'Fitness Activities'];
export default function AddNewBooking({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleOnSave = () => {
    setOpen(false);
  };
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [dateOne, setValueDateOne] = useState(new Date('2014-08-18T21:11:54'));

  const handleOnChangeDate = (newValue) => {
    setValueDateOne(newValue);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Add new booking</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Event Type"
              onChange={handleChange}
              variant="standard"
            >
              {EVENT_TYPE.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
            <TextField
              margin="dense"
              id="name"
              label="Location"
              type="location"
              fullWidth
              variant="standard"
              style={{ marginBottom: '20px' }}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} style={{ marginBottom: '20px' }} />}
                label="First day proposed"
                variant="standard"
                value={dateOne}
                onChange={handleOnChangeDate}
              />
              <DateTimePicker
                renderInput={(props) => <TextField {...props} style={{ marginBottom: '20px' }} />}
                label="Second day proposed"
                variant="standard"
                value={dateOne}
                onChange={handleOnChangeDate}
              />
              <DateTimePicker
                renderInput={(props) => <TextField {...props} style={{ marginBottom: '20px' }} />}
                label="Third day proposed"
                variant="standard"
                value={dateOne}
                onChange={handleOnChangeDate}
              />
            </LocalizationProvider>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnSave} variant="contained">
            Save
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
