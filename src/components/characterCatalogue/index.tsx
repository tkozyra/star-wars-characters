import { Container } from "./style";
import CharacterList from "../characterList";

export const CharacterCatalogue = () => {
  return (
    <Container>
      <h1>Star Wars characters</h1>
      <CharacterList />
    </Container>
  );
};
