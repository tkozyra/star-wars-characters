import styled from "styled-components";

type Props = {
  loading: boolean;
};

export const Container = styled.div<Props>`
  ${({ loading }) => loading && `opacity: 0.3`};

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
  background-color: #f3f3f3;
  border: 1.5px solid #f3f3f3;
  border-radius: 5px;
  padding: 16px 32px;
  &:hover {
    border-color: #ffe81f;
  }
  color: #2b2d2f;
  transition: 0.2s ease;
  margin: 1em 0;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0 2em 0;
`;

export const Input = styled.input`
  flex-grow: 1;
  border: 2px solid #f3f3f3;
  margin-right: 1em;
  border-radius: 5px;
  background-color: #fff;
  padding: 0.5em 1em;
  &:focus {
    border-color: #ffe81f;
    outline: none;
  }
  transition: 0.1s ease;
`;

export const FilterResetButton = styled.button`
  background-color: #f3f3f3;
  border: 2px solid #f3f3f3;
  border-radius: 5px;
  padding: 8px 16px;
  &:hover {
    border-color: #ffe81f;
  }
  color: #2b2d2f;
  transition: 0.2s ease;
  cursor: pointer;
`;
