import { useData } from '../context/DataContext';
import styled from 'styled-components';

const MonthButton = styled.button`
  margin-top: 10px;
  display: flex ;
  padding: 10px 20px;
  color: var(--color1);
  background-color: var(--color4);
  border: none;
  border-radius:5px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  justify-content: center;
`

function nameMonth(n: number) {
  const date = new Date();
  date.setMonth((date.getMonth())+n);

  const name = new Intl.DateTimeFormat
  ('pt-BR', {month: 'long'})
  .format(date);

  const nameReady = 
  // Get the first letter and capitalize it
  name.charAt(0).toUpperCase() +
  // Get the rest of the word without first letter
  name.slice(1);
  // charAt() Returns the character at index

  return nameReady;
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth()+ 1).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  
  return `${yyyy}-${mm}-${dd}`;
}

const MonthBtn = ({n}: {n:number}) => {
  const {setStart, setEnd} = useData();

  function setMonth(n: number) {
    const date = new Date();
    date.setMonth((date.getMonth())+n);

    const firstDay = new Date(
      date.getFullYear(), date.getMonth(), 1
    );
    const lastDay = new Date(
      date.getFullYear(), date.getMonth()+1, 0
    );

    setStart(formatDate(firstDay));
    setEnd(formatDate(lastDay));
  }

  return (
    <MonthButton
      onClick={() => setMonth(n)}
    >
     {nameMonth(n)}
    </MonthButton>
  )
}

export default MonthBtn;