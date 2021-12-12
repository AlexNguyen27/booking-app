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

const BOOKING_STATUS = ['Pending Review', 'Approved', 'Reject'];

const mockup = {
  status: 'Pending Review'
};
export default function EditBooking({ data = mockup, open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleOnSave = () => {
    setOpen(false);
  };
  const [eventType, setEventType] = useState(data.status);

  const handleChange = (event) => {
    setEventType(event.target.value);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Edit booking</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={eventType}
              label="Event Type"
              onChange={handleChange}
              // variant="standard"
            >
              {BOOKING_STATUS.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
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
