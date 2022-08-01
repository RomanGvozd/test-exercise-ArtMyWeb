import React from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

function CustomSelect({title, value, setChange, options}) {

    const handleChange = (e) => {
        setChange(e.target.value)
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
                {title}
            </InputLabel>
            <Select
                sx={{ maxWidth: '100%' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="gender"
                onChange={(e)=>handleChange(e)}
            >
                {options.map((option)=>(
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default CustomSelect