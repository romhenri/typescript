import { useData } from "../context/DataContext"
import DateRange from "./DateRange";

const Header = () => {
  const { data } = useData();
  
  return (
    <div>
      <DateRange />
    </div>
  )
}

export default Header