import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <img src="/logo/vite.svg" alt="logo" />
      <Button>test</Button>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: calc(100% - 2rem);
  height: 2rem;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: aliceblue;
`;
const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.white};
  font-weight: 700;
  font-size: 1.75rem;
`;


