import { useState } from 'react';
import SpinWheel from './components/spinWheel/spinWheel';
import Tab from './components/tab/tab';

const App = () => {
  const [values, setValues] = useState<string[]>([]);

  const addValue = (values: string[]) => {
    setValues(values);
  };

  return (
    <div className="App flex flex-col items-center justify-center bg-red-600">
      <SpinWheel values={values}/>
      <Tab addValue={addValue}/>
    </div>
  );
};


export default App;
