import "./Controller.css"
const Controller = ({onClickButton})=>{
    const onClickValue = (e) => {
        onClickButton(e.target.value)
    };
    return (
        <div>
            <button onClick={onClickValue} value="1">1</button>
            <button onClick={onClickValue} value="2">2</button>
            <button onClick={onClickValue} value="3">3</button>
            <button onClick={onClickValue} value="+">+</button><br/>
            <button onClick={onClickValue} value="4">4</button>
            <button onClick={onClickValue} value="5">5</button>
            <button onClick={onClickValue} value="6">6</button>
            <button onClick={onClickValue} value="-">-</button><br/>
            <button onClick={onClickValue} value="7">7</button>
            <button onClick={onClickValue} value="8">8</button>
            <button onClick={onClickValue} value="9">9</button>
            <button onClick={onClickValue} value="*">x</button><br/>
            <button onClick={onClickValue} value="=">=</button>
            <button onClick={onClickValue} value="0">0</button>
            <button onClick={onClickValue} value="C">C</button>
            <button onClick={onClickValue} value="/">/</button><br/>
        </div>
    );
};

export default Controller;