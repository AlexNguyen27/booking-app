import { useState, useEffect } from 'react';
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

const BOOKING_STATUS = {
  pendingReview: 'Pending Review',
  approved: 'Approved',
  rejected: 'Rejected'
};

const mockup = {
  status: 'pendingReview'
};
export default function EditBooking({ data = mockup, open, setOpen }) {
  const [eventType, setEventType] = useState(data.status);
  const handleClose = () => {
    setOpen(false);
  };

  console.log('data', data);

  const handleOnSave = () => {
    setOpen(false);
  };

  useEffect(() => {
    setEventType(data.status);
  }, [data.status]);
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
              {Object.keys(BOOKING_STATUS).map((key) => (
                <MenuItem value={key}>{BOOKING_STATUS[key]}</MenuItem>
              ))}
            </Select>
            <TextField
              margin="dense"
              id="reason"
              label="Reason"
              multiline
              fullWidth
              rows={4}
              style={{ marginBottom: '20px' }}
            />
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
