import styled from "styled-components";

export const Spinner = styled.div`
  width: 70px;
  height: 70px;
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  background-color: transparent;
  border: 5px solid transparent;
  border-top: 5px solid #ffe81f;
  -webkit-animation: 1s spin linear infinite;
  animation: 1s spin linear infinite;

  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
