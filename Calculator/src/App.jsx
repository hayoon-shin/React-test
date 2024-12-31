import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState } from 'react'
function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const onClickButton = (value) => {
    if(value === '=') {
      const evalResult = eval(input);
      setResult(evalResult);
      setInput(evalResult.toString());
    } else if(value === 'C') {
      setInput('');
      setResult(null);
    } else {
      setInput((prev)=>prev+value);
    }
  };
  return (
    <div className="app">
      <h1>계산기</h1>
      <section className="viewer">
      <Viewer count={result !== null ? result : input || '0'} />
      </section>
      <section className="controller">
      <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App;
