import React from 'react'
import styled from 'styled-components';

const DateInputDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & label {
    color: var(--color2);
    background-color: var(--color4);
    padding: 5px 35px;
    border-radius: 10px;
  }

  & input {
    padding: 8px;
    border-radius: 5px;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 5px 20px -12px inset, rgba(0, 0, 0, 0.3) 5px 16px 6px -18px inset;
    background-color: var(--color6);
  }
`

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({label, ...props}: IDateInput) => {
  return (
    <DateInputDiv>
      <label htmlFor={label}>{label}:</label>
      <input type="date" name={label} id={label} {...props}/>
    </DateInputDiv>
  )
}

export default DateInput