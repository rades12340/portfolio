import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";
import UiContext from "../context/uiContext";

export default function FormDialog() {
  const uiContext = useContext(UiContext);

  const { open, closeDialog } = uiContext;
  return (
    <div>
      <Dialog
        open={open}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Start your growth journey now
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Email address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Phone number"
            type="text"
            fullWidth
          />
          <TextField
            id="details"
            label="Details"
            multiline
            rows="4"
            margin="normal"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={closeDialog} color="primary">
            Contact me
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
