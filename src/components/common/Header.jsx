import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <Logo src="/logo/BookLogo.svg" alt="Book Management System" />
      </Link>
      <BookAddButton>+ Add Book</BookAddButton>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: calc(100% - 2rem);
  max-width: calc(1280px - 2rem);
  height: 2.75rem;
  padding: 1rem;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  z-index: 100;
`;
const Logo = styled.img`
  height: auto;
  max-height: 3.75rem;
  width: auto;
  max-width: 8rem;
  object-fit: contain;
`;
const BookAddButton = styled.button`
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
  font-weight: 500;
  font-size: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.palette.black};
    color: ${({ theme }) => theme.palette.white};
    border: none;
    outline: none;
  }
  &:active {
    font-weight: 700;
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;


