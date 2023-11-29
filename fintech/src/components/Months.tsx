import MonthBtn from './MonthBtn'
import styled from 'styled-components'

const MonthsDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

const Months = () => {
  return (
    <MonthsDiv>
      <MonthBtn n={-4}/>
      <MonthBtn n={-3}/>
      <MonthBtn n={-2}/>
      <MonthBtn n={-1}/>
      <MonthBtn n={0}/>
    </MonthsDiv>
  )
}

export default Months;