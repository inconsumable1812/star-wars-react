import { FC } from 'react';
import { useAppSelector } from 'src/app/hooks';
import { selectGetInfo } from 'src/features/GetInfo/redux/selectors';
import { PlanetsCard } from '../../components/PlanetsCard/PlanetsCard';

import styles from './Planets.module.scss';

type Props = {};

const Planets: FC<Props> = () => {
  const { planets } = useAppSelector(selectGetInfo);

  return (
    <>
      <header></header>
      <main className={`${styles.root}`}>
        <div className={`${styles.planets}`}>
          {planets.results.map((planet) => (
            <PlanetsCard planet={planet} key={planet.name}></PlanetsCard>
          ))}
        </div>
      </main>
    </>
  );
};

export type { Props };

export { Planets };
