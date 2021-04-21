import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  // padding: 8px 16px;
  border: 1.5px solid #ffe81f;
  border-radius: 5px;
  margin: 8px 0;
  transition: 0.2s ease;
  :hover {
    box-shadow: 2px 2px 2px 0px #ffe81f;
  }
  @media (min-width: 1024px) {
    padding: 8px 16px;
  }
`;

export const ItemsContainer = styled.div`
  display: inline-grid;
  padding: 8px 16px;
  cursor: pointer;
  grid-template-columns: 8fr auto 4fr 4fr;
  @media (min-width: 768px) {
    grid-template-columns: 8fr auto 3fr 3fr;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 8fr auto 2fr 2fr;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: left;
`;

export const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: right;
  text-align: right;
`;

export const ItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: left;
  text-align: left;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 0.6em;
  @media (min-width: 425px) {
    font-size: 0.8em;
  }
  @media (min-width: 768px) {
    font-size: 0.9em;
  }
`;

export const Value = styled.p`
  margin: 0;
  font-size: 0.8em;
  @media (min-width: 425px) {
    font-size: 1.1em;
  }
  @media (min-width: 768px) {
    font-size: 1.4em;
  }
`;
