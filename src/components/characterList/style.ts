import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  margin: 0;

  @media (min-width: 760px) {
    width: 90vw;
  }
  @media (min-width: 1024px) {
    width: 60vw;
  }
`;

export const Button = styled.button`
  background: #ffe81f;
  color: #000;
  padding: 16px 32px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
  margin: 1em 0;
`;
