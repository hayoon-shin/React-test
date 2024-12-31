import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState, useEffect, useRef } from 'react'
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('a');
  const isMount = useRef(false);
  //마운트 될때, 모든 스테이트가 바뀔 때 업데이트 
  
  useEffect(()=>{
    if(isMount.current === false) {
      isMount.current= true;
      console.log(`(Mount)count: `);
      return;
    }else{
    console.log(`(Update)count: `);
    }
  }); // [ ] 의존성배열 (dependency array deps라고 한다.)
  const onClickButton = (value) => {
    setCount(count + value)
  };

  //input 변화된 값 stting
  const onChangeInput = (e)=>{
    setInput(e.target.value);
  };
  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <div>
        <input type="text" value={input} onChange={onChangeInput} />
      </div>
      <section className="viewer">
      <Viewer count={count} />
      </section>
      <section className="controller">
      <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
