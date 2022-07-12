import { FC } from 'react';
import { People } from 'src/api/types';

import styles from './PeopleCard.module.scss';

type Props = {
  people: People;
};

const PeopleCard: FC<Props> = ({ people }) => {
  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.peopleName}`}>{people.name}</h2>
      <div className={`${styles.peopleInfo}`}>
        <p>Пол: {people.gender}</p>
        <p>Дата рождения: {people.birth_year}</p>
        <p>Рост: {people.height}</p>
        <p>Вес: {people.mass}</p>
        <p>Цвет волос: {people.hair_color}</p>
        <p>Цвет кожи: {people.skin_color}</p>
        <p>Цвет глаз: {people.eye_color}</p>
      </div>
    </div>
  );
};

export { PeopleCard };
