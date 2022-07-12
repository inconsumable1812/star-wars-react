import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { REQUEST_STATUS } from 'src/helpers/redux';
import { selectGetInfo } from './redux/selectors';
import { getPeople, getPlanets } from './redux/thunks';
import styles from './GetInfo.module.scss';
import { Planets } from './view/containers/Planets/Planets';
import { People } from './view/containers/People/People';

type Props = {
  variant: 'planets' | 'people';
};

const GetInfo: FC<Props> = ({ variant }) => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector(selectGetInfo);

  useEffect(() => {
    dispatch(getPlanets({ page: '1' }));
    dispatch(getPeople({ page: '1' }));
  }, [dispatch]);

  switch (status) {
    case REQUEST_STATUS.pending:
      return <p>Loading...</p>;
    case REQUEST_STATUS.fulfilled:
      switch (variant) {
        case 'planets': {
          return <Planets></Planets>;
        }
        case 'people': {
          return <People></People>;
        }
        default: {
          return null;
        }
      }
    default:
      return <p>{error}</p>;
  }
};

export { GetInfo };
