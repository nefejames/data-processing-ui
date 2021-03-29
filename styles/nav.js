import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UL = styled.ul`
  list-style: none;
`;

const LI = styled.li``;

const A = styled.a`
  font-family: Gilroy-SemiBold;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  /* text-decoration: none; */
  color: #b5b5b5;

  :not(:last-child) {
    margin-right: 20px;
  }
`;

const NavLeft = styled.div`
  width: 38%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export { Nav, UL, LI, A, NavLeft };
