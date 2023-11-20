import React from 'react'
import styled from 'styled-components';
import DateInput from './DateInput'
import { useData } from '../context/DataContext';

const DataRangeForm = styled.form`
  display: flex;
  margin: auto;
  justify-content: center;
  padding: 15px;
  gap: 20px;
  font-weight: 600;
  font-size: 1.2rem;
`

const DateRange = () => {
  const {start, setStart, end, setEnd} = useData();

  return (
    <DataRangeForm onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={start}
        onChange={({ target }) => {setStart(target.value)}} 
      />
      <DateInput 
        label="Fim"
        value={end}
        onChange={({ target }) => {setEnd(target.value)}}
      />
    </DataRangeForm>
  )
}

export default DateRange