import React from 'react'
import Todocard from './Todocard'


var todolistArray =[]
function Todo(props) {
    todolistArray = props.list
    return (
        <div>
            {todolistArray.length ? todolistArray.map(item => <Todocard eachtodo = {item} remove = {props.remove} />): <div>EMPTY</div>}
           
        </div>
    )
}

export default Todo
