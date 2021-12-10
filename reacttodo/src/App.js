import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [todo, setTodo] = useState('')
  const [todolist, setTodolist] = useState([])
  
  const addtolist =() => {
setTodolist([...todolist, todo])
  }
  const handleRemovetodo = (removeitem) => {
    setTodolist(todolist.filter(item => item!==removeitem))
  }
  console.log(todo, todolist)
         return(
        <>

        <input placeholder= "enter todos" onKeyUp={(e)=> {setTodo(e.target.value)}}/>
        <button onClick={addtolist}>ADD TO DO</button>
        <Todo list = {todolist} remove = {handleRemovetodo} />
       {/* { todolist.length? todolist.map((item, index) => {<div>{item}</div>}): <div>EMPTY</div>} */}
    </>
  );
}

export default App;
