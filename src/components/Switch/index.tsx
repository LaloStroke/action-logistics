import React from 'react';
import './switch.css';

const Switch: React.FC<{ handleChange: () => void; value: boolean; id: string }> = ({
  value,
  id,
  handleChange,
}): JSX.Element => {
  return (
    <>
      <input className="checkbox" onChange={handleChange} checked={value} type="checkbox" id={id} />
      <label className="switch" htmlFor={id}></label>
    </>
  );
};

export default Switch;
