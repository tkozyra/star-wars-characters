import { useEffect } from "react";
import { getMoreCharacters } from "../../actions/charactersActions";
import { fetchFilms } from "../../actions/filmsActions";
import { useAppDispatch, useAppSelector } from "../../hooks";

const CharacterList = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters);
  const numberOfCharactersFetched = 5;
  const numberOfCharactersFetchedOnStart = 10;

  useEffect(() => {
    dispatch(fetchFilms());
    dispatch(getMoreCharacters(numberOfCharactersFetchedOnStart));
  }, []);

  const getMore = (numberOfCharacters: number) => {
    dispatch(getMoreCharacters(numberOfCharacters));
  };

  return (
    <div>
      <h1>Characters</h1>

      <button onClick={() => getMore(numberOfCharactersFetched)}>
        Fetch more items
      </button>
    </div>
  );
};

export default CharacterList;
