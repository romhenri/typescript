import { useData } from "../context/DataContext"
import styled from "styled-components";
import DateRange from "./DateRange";
import Months from "./Months";

const HeaderDiv = styled.div`
  display: flex;
  padding: 10px;
  margin: 0px 15px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 10px;
  background-color: var(--bg);
`

const Header = () => {
  const { data } = useData();
  
  return (
    <div>
      <HeaderDiv>
        <DateRange />
      </HeaderDiv>
      <Months />
    </div>
  )
}

export default Header;