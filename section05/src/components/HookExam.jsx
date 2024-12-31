import { useState } from "react";

//사용자 훅 
function useInput(){ //use라고 쓰면 사용자훅으로 인식함
    const [name, setName] = useState('');
    const onChange = (e) => {
        setName(e.target.value);
    }
    return [name, onChange];
}
const HookExam = () => {
    //const [name, setName] = useState('');
    const [name, setName] = useInput();
    const [name2, setName2] = useInput();
    return(
        <>
            <div>
                <input type="text" value={name} onChange={setName} />
            </div>
            <div>
                <input type="text" value={name2} onChange={setName2} />
            </div>
        </>
    );
    
};
export default HookExam;