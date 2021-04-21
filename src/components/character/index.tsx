import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { Film } from "../../types";
import {
  Container,
  Item,
  ItemRight,
  ItemLeft,
  ItemsContainer,
  Title,
  Value,
} from "./style";

type Props = {
  name: string;
  gender: string;
  birthYear: string;
  height: string;
  mass: string;
  films: Array<string>;
};

const Character: React.FC<Props> = ({
  name,
  gender,
  birthYear,
  height,
  mass,
  films,
}) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const stateFilms = useAppSelector((state) => state.films);
  const [titles, setTitles] = useState<string[]>([]);

  useEffect(() => {
    setTitles(
      films.map(
        (url) => stateFilms.films.find((film: Film) => film.url === url).title
      )
    );
  }, [setTitles, films, stateFilms.films]);

  return (
    <Container
      detailsVisible={detailsVisible}
      onClick={() => setDetailsVisible(!detailsVisible)}
    >
      <ItemsContainer>
        <ItemLeft>
          <Title>Name</Title>
          <Value>{name}</Value>
        </ItemLeft>
        <Item></Item>
        <ItemRight>
          <Title>Gender</Title>
          <Value>{gender}</Value>
        </ItemRight>
        <ItemRight>
          <Title>Year of birth</Title>
          <Value>{birthYear}</Value>
        </ItemRight>
      </ItemsContainer>
      {detailsVisible && (
        <ItemsContainer>
          <ItemLeft>
            <Title>Films</Title>
            {titles.map((title) => (
              <Value key={title}>{title}</Value>
            ))}
          </ItemLeft>
          <Item></Item>
          <ItemRight>
            <Title>Height</Title>
            {height === "unknown" ? (
              <Value>{height}</Value>
            ) : (
              <Value>{height}cm</Value>
            )}
          </ItemRight>
          <ItemRight>
            <Title>Mass</Title>
            {mass === "unknown" ? (
              <Value>{mass}</Value>
            ) : (
              <Value>{mass}kg</Value>
            )}
          </ItemRight>
        </ItemsContainer>
      )}
    </Container>
  );
};

export default Character;
