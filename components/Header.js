import Link from "next/link";
import styled from "styled-components";
// import { Container } from "./Styled";

const HeaderStyled = styled.header`
  background: #054861;
  color: #e1fef1;
  padding: 5px;
  margin-bottom: 40px;
`;

const HeaderContainer = styled.div`
  max-width: 900px;
  margin: auto;
  overflow: auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h2`
  cursor: pointer;
`;

export const Header = ({ toggle }) => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Link href="/">
          <Logo>Ubay Blog</Logo>
        </Link>

        <button onClick={toggle}>Dark Mode</button>
      </HeaderContainer>
    </HeaderStyled>
  );
};
