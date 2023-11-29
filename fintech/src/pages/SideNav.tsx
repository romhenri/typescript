import styled from "styled-components"
import { NavLink } from "react-router-dom";
import { AiFillCarryOut } from "react-icons/ai";
import { SiMarketo } from "react-icons/si";
import { MdOutlineWeb,MdContacts } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosExit } from "react-icons/io";

const Nav = styled.nav`
  padding: 30px 20px 0px 20px;
  border-radius: 10px;
  background-color: var(--bg);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  width: 180px;

  & h1 {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color1);
  }
  & a {
    text-decoration: none;
  }
  & ul {
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  & li {
    display: flex;
    gap: 15px;
    align-items: center;
    font-weight: 500;
    color: var(--color2);
    border: 2px solid transparent;
    padding: 10px;
    border-radius: 10px;

    &:hover {
      transition: all .2s;
      cursor: pointer;
      background-color: var(--color6);
    }
    & svg {
      font-size: 1.4rem;
    }
  }
`

const SideNav = () => {
  return (
    <Nav>
      <div>
        <h1>Fintech</h1>
      </div>
      <ul>
        <NavLink to={"/"}>
          <li>
            <AiFillCarryOut />
            Resumo
          </li>
        </NavLink>

        <NavLink to={"vendas"}>
          <li>
            <SiMarketo />
            Vendas
          </li>
        </NavLink>
        
        <li>
          <MdOutlineWeb />
          Webhooks
        </li>
        <li>
          <IoSettingsSharp />
          Configurações
        </li>
        <li>
          <MdContacts />
          Contato
        </li>
        <li>
          <IoIosExit />
          Sair
        </li>
      </ul>
    </Nav>
  )
}

export default SideNav