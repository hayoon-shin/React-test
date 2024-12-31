import './List.css'
import ListItem from './ListItem';
import { useState, useMemo } from 'react';

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState('');
    
    const onChangeSearch=(e)=>{
        setSearch(e.target.value);
    };

    //useState 해당되는 서치내용을 바꾸면 List는 리랜더링이 발생된다.
    //이 때, 필터링을 진행한다. 
    const getFilterItem = ()=>{
        if(search === ''){
            return todos;
        }
        return todos.filter((item)=>{
            return item.content.toLowerCase().includes(search.toLowerCase());
        });
    };

    const filterItem = getFilterItem();

    //랜더링이 발생할 때마다 전체갯수, 업무를 완료한 갯수, 업무를 미완료한 갯수연산한다.
    // const getAnalyzeData = ()=>{
    //     console.log("getAnalyzeData 호출");
    //     const totalCount = todos.length;
    //     //이 부분이 시간을 많이 잡아먹는다. 
    //     const todosDone = todos.filter((item)=>{
    //         return item.isDone === true;
    //     });
    //     const doneCount = todosDone.length;
    //     const notDoneCount = totalCount - doneCount;
    //     return {totalCount, doneCount, notDoneCount,}
    // };

    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
        console.log("getAnalyzeData 호출");
        const totalCount = todos.length;
        //이 부분이 시간을 많이 잡아먹는다. 
        const todosDone = todos.filter((item)=>{
            return item.isDone === true;
        });
        const doneCount = todosDone.length;
        const notDoneCount = totalCount - doneCount;
        return {totalCount, doneCount, notDoneCount,};

    },[todos]);
    return(
        <div className='list'>
            <h4>Todo List 🌱</h4>
            <div>
                <p>total: {totalCount}</p>
                <p>doneCount: {doneCount}</p>
                <p>notDoneCount: {notDoneCount}</p>
            </div>
            <input value={search} type="text" onChange={onChangeSearch} placeholder='검색어를 입력해주세요' />
            <div className='item'>
                {filterItem.map((item)=>{
                    return <ListItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />;
                })}
            </div>
        </div>
    );
};

export default List;