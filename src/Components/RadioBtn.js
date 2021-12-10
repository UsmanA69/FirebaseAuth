import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <FormControl component="fieldset" sx={{width:'210px'}}>
      <FormLabel component="legend" sx={{textAlign:'left'}}>Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={(e)=>handleChange(e)}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}
