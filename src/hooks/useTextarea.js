import { useState } from 'react';

export const useTextarea = (name, initial) => {
  const [value, setValue] = useState(initial);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const inputProps = {
    name,
    rows: '2',
    onChange: handleChange
  };

  return [value, inputProps];
};
