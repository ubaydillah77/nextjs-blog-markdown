import Link from 'next/link';
import styled from 'styled-components';
import { MdNightlight, MdSunny } from 'react-icons/md';
// import { Container } from "./Styled";

const HeaderStyled = styled.header`
  background: #054861;
  color: #e1fef1;
  /* padding: 5px; */
  margin-bottom: 40px;
`;

const HeaderContainer = styled.div`
  max-width: 900px;
  height: 60px;
  margin: auto;
  overflow: auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  cursor: pointer;
`;

const ButtonToggle = styled.button`
  /* background-color: ${({ theme }) => theme.bodyColor}; */
  /* color: ${({ theme }) => theme.fontColor}; */
  font-size: 1rem;
  width: 60px;
  height: 35px;
  border: none;
  box-shadow: none;
  border-radius: 5px;
  transition: all 0.2s ease;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const Header = ({ toggle, isTheme }) => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Link passHref={true} href='/'>
          <Logo>Ubay Blog</Logo>
        </Link>

        <ButtonToggle onClick={toggle}>
          {isTheme === 'light' ? (
            <MdNightlight color={isTheme === 'light' ? 'red' : 'white'} />
          ) : (
            <MdSunny />
          )}
        </ButtonToggle>
      </HeaderContainer>
    </HeaderStyled>
  );
};
