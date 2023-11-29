import Sale from '../components/Sale';
import { useData } from '../context/DataContext'
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  margin: 10px auto;
  padding: 0px 15px;
`

const SalesPage = () => {
  const {data} = useData();

  if(data === null) return null;

  return (
    <Ul>
      {data.map((sale, index) => (
        <li key={index}>
          <Sale
            sale={sale}
          />
        </li>
      ))}
    </Ul>
  )
}

export default SalesPage