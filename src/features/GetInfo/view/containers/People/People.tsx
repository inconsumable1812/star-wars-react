import { FC, SyntheticEvent, useState } from 'react';
import { useAppSelector } from 'src/app/hooks';
import { selectGetInfo } from 'src/features/GetInfo/redux/selectors';
import { Link, useParams } from 'react-router-dom';

import styles from './People.module.scss';
import { PeopleCard } from '../../components/PeopleCard/PeopleCard';

type Props = {};

const People: FC<Props> = () => {
  const [value, setValue] = useState('all');
  const { people, planets } = useAppSelector(selectGetInfo);
  const params = useParams();

  const handleClickGender = (e: SyntheticEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value);
  };

  const currentPlanetArray = planets.results.filter(
    (planet) => planet.name === params.planetName
  );
  if (currentPlanetArray.length === 0) {
    window.location.href = '/mock';
  }

  const currentPlanet = currentPlanetArray[0];
  const peopleInCurrentPlanet = currentPlanet.residents
    .map((url) => people.results.filter((p) => p.url === url))
    .flat()
    .filter((p) => {
      return value === 'all' ? true : p.gender === value;
    });

  return (
    <>
      <header></header>
      <main className={`${styles.root}`}>
        <Link to="/">на главную</Link>
        <h1
          className={`${styles.planetName}`}
        >{`Список всех персонажей на планете ${params.planetName}`}</h1>
        <label className={`${styles.genderLabel}`}>
          Выберите пол персонажа:{' '}
          <select value={value} onChange={handleClickGender}>
            <option value="all">Любой</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
            <option value="unknown">Неизвестный</option>
            <option value="n/a">Не имеет пола</option>
          </select>
        </label>

        <div className={`${styles.people}`}>
          {peopleInCurrentPlanet.length === 0 ? (
            <p>Персонажей не найдено</p>
          ) : (
            peopleInCurrentPlanet.map((p) => (
              <PeopleCard people={p} key={p.name}></PeopleCard>
            ))
          )}
        </div>
      </main>
    </>
  );
};

export type { Props };

export { People };
