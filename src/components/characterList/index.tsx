import { useEffect } from "react";
import { getMoreCharacters } from "../../actions/charactersActions";
import { fetchFilms } from "../../actions/filmsActions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Character from "../character";
import { Button, Container } from "./style";

const CharacterList: React.FC = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters);
  const films = useAppSelector((state) => state.films);
  const numberOfCharactersFetched = 5;
  const numberOfCharactersFetchedOnStart = 10;

  useEffect(() => {
    dispatch(fetchFilms());
    dispatch(getMoreCharacters(numberOfCharactersFetchedOnStart));
  }, [dispatch]);

  const getMore = (numberOfCharacters: number) => {
    dispatch(getMoreCharacters(numberOfCharacters));
  };

  return (
    <Container>
      {characters.charactersSelected && films.films.length ? (
        characters.charactersSelected.map((character) => {
          return (
            <Character
              key={character.name}
              name={character.name}
              gender={character.gender}
              birthYear={character.birth_year}
              height={character.height}
              mass={character.mass}
              films={character.films}
            />
          );
        })
      ) : (
        <p>loading...</p>
      )}
      {!characters.allCharactersFetched && (
        <Button onClick={() => getMore(numberOfCharactersFetched)}>
          Load more characters
        </Button>
      )}
    </Container>
  );
};

export default CharacterList;
