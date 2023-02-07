import { TextField } from '@mui/material';
import React from 'react';

export const Form = ({ handleOnChange, value }) => {
    return (
        <form  onSubmit={e => handleOnChange(e)}>
            <button type="submit">Buscar</button>
            <TextField name="city"  value={value} label="Outlined" variant="outlined" />
        </form>
    )
}
