import React from 'react'
import Todocard from './Todocard'


var todolistArray =[]
function Todo(props) {
    todolistArray = props.list
    return (
        <div>
            {todolistArray.length ? todolistArray.map(item => <Todocard eachtodo = {item} remove = {props.remove} />): <div>EMPTY</div>}
           
        </div>

<ul class="list-group">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A fourth item</li>
<li class="list-group-item">And a fifth one</li>
</ul>
    )
}

export default Todo
