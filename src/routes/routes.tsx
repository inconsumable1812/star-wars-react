import { FC, ReactElement } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

type Props = {
  children: ReactElement;
};

const RoutesSwitcher: FC<Props> = ({ children }) => (
  <BrowserRouter>
    {children}
    <Routes>
      <Route path="/" element={<p></p>} />
    </Routes>
    {/* <Link to={'/add'}>add</Link>
      <Link to={'/remove'}>remove</Link>
      <Link to={'/'}>главная</Link> */}
  </BrowserRouter>
);

export default RoutesSwitcher;
