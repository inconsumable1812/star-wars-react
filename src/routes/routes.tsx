import { FC } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GetInfo } from 'src/features/GetInfo';

type Props = {};

const RoutesSwitcher: FC<Props> = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GetInfo variant="planets"></GetInfo>} />
      <Route
        path=":planetName"
        element={<GetInfo variant="people"></GetInfo>}
      />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default RoutesSwitcher;
