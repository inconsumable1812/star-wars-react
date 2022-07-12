import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Planet } from 'src/api/types';

import styles from './PlanetsCard.module.scss';

type Props = {
  planet: Planet;
};

const PlanetsCard: FC<Props> = ({ planet }) => {
  return (
    <Link to={`/planet/${planet.name}`} className={`${styles.link}`}>
      <div className={`${styles.container}`}>
        <h2 className={`${styles.planetName}`}>{planet.name}</h2>
        <div className={`${styles.planetInfo}`}>
          <p>Диаметр: {planet.diameter}</p>
          <p>Гравитация: {planet.gravity}</p>
          <p>Климат: {planet.climate}</p>
          <p>Поверхность: {planet.terrain}</p>
          <p>Орбитальный период: {planet.orbital_period}</p>
        </div>
      </div>
    </Link>
  );
};

export { PlanetsCard };
