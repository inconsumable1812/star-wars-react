import React from 'react';

import './App.scss';
import { useAppDispatch } from './app/hooks';
import { getPlanets } from 'src/features/GetInfo/redux/slice';
function App() {
  const dispatch = useAppDispatch();
  const click = () => {
    dispatch(getPlanets({ page: '2' }));
  };

  return (
    <div className="App">
      <button onClick={click}>click</button>
    </div>
  );
}

export default App;
