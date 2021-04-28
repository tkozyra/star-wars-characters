import { useEffect, useState } from "react";
import { getMoreCharacters } from "../../actions/charactersActions";
import { fetchFilms } from "../../actions/filmsActions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { CharacterType } from "../../types";
import Character from "../character";
import { Spinner } from "../spinner";
import { Button, Container, FilterResetButton, Form, Input } from "./style";

const CharacterList: React.FC = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters);
  const films = useAppSelector((state) => state.films);
  const numberOfCharactersFetched = 10;
  const numberOfCharactersFetchedOnStart = 10;

  const [name, setName] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterType[]>(
    []
  );

  useEffect(() => {
    dispatch(fetchFilms());
    dispatch(getMoreCharacters(numberOfCharactersFetchedOnStart));
  }, [dispatch]);

  const getMore = (numberOfCharacters: number) => {
    dispatch(getMoreCharacters(numberOfCharacters));
  };

  const onNameChange = (e: any) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (name.length) {
      const charFiltered = characters.charactersSelected.filter((character) =>
        character.name.toLowerCase().includes(name.toLowerCase())
      );
      setFilteredCharacters(charFiltered);
    } else {
      setFilteredCharacters(characters.charactersSelected);
    }
  }, [name, characters]);

  return (
    <Container loading={characters.loading}>
      {filteredCharacters && films.films.length && !characters.loading ? (
        <Form>
          <Input
            type="text"
            placeholder="Filter by name"
            value={name}
            onChange={onNameChange}
          ></Input>

          <FilterResetButton
            onClick={(e) => {
              e.preventDefault();
              setName("");
            }}
          >
            Reset filter
          </FilterResetButton>
        </Form>
      ) : null}

      {filteredCharacters && films.films.length ? (
        filteredCharacters.map((character) => {
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
        <Spinner />
      )}

      {!filteredCharacters.length &&
      films.films.length &&
      !characters.loading ? (
        <h2>No characters found.</h2>
      ) : null}

      {filteredCharacters &&
      !characters.allCharactersFetched &&
      films.films.length &&
      !name.length ? (
        <Button onClick={() => getMore(numberOfCharactersFetched)}>
          Load more characters
        </Button>
      ) : null}
    </Container>
  );
};

export default CharacterList;
