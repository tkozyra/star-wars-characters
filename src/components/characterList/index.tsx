import { useEffect, useState } from "react";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { getMoreCharacters } from "../../actions/charactersActions";
import { fetchFilms } from "../../actions/filmsActions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Character from "../character";
import { Spinner } from "../spinner";
import { Button, Container, FilterResetButton, Form, Input } from "./style";

const CharacterList: React.FC = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters);
  const films = useAppSelector((state) => state.films);
  const numberOfCharactersFetched = 5;
  const numberOfCharactersFetchedOnStart = 10;

  const [name, setName] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState<any[]>([]);

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

  if (characters.loading) {
    return <Spinner />;
  }

  return (
    <Container loading={characters.loading}>
      {!!filteredCharacters && !!films.films.length && !characters.loading && (
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
      )}

      {filteredCharacters && films.films.length && !characters.loading ? (
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
        <Spinner></Spinner>
      )}

      {!filteredCharacters.length && !characters.loading && (
        <h2>No characters found.</h2>
      )}

      {filteredCharacters &&
        !characters.allCharactersFetched &&
        films.films.length &&
        !name.length && (
          <Button onClick={() => getMore(numberOfCharactersFetched)}>
            Load more characters
          </Button>
        )}
    </Container>
  );
};

export default CharacterList;
