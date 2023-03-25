import { DialogContent, DialogTitle, FormGroup, TextField } from "@mui/material";
import { forwardRef } from "react";
const EditCard = forwardRef((props, ref) => (
    <>
        <DialogTitle>Add Video/mp3 Card</DialogTitle>
        <DialogContent>
            <FormGroup sx={{ pt: "1rem", gap: '1rem' }} ref={ref}>
                <TextField
                    helperText="Please enter video name (required)"
                    label="Name of the Video"
                    required
                />
                <TextField
                    helperText="Please enter embed link of the video (required)"
                    label="Youtube/mp3 embeded Link"
                    required
                />
            </FormGroup>
        </DialogContent>
    </>
))

export default EditCard
