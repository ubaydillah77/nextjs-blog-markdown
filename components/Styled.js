import styled from "styled-components";

export const Container = styled.main`
  max-width: 900px;
  margin: auto;
  overflow: auto;
  padding: 0 10px;
`;

export const Button = styled.a`
  display: inline-block;
  background: ${(props) => (props.back ? "#f4f4f4" : "#e1fef1")};
  color: ${(props) => (props.back ? "#000" : "#054861")};
  border: none;
  margin-bottom: ${(props) => (props.back ? "20px" : "")};
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.card};
  padding: ${(props) => (props.cardPage ? "15px 30px" : "15px")};
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: ${(props) => props.theme.border};
`;

export const PostDate = styled.div`
  background: #f4f4f4;
  margin-bottom: 20px;
  padding: 3px 10px;
`;

export const PostImageCard = styled.div`
  width: "100%";
  border-radius: 10px;
  overflow: "hidden";
`;
