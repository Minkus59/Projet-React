import React, {useState} from 'react'
import AddTodoForm from './AddTodoForm'
import {v4 as uuidv4} from 'uuid'

export default function Todo() {

    const [todos, setTodos] = useState([
        {id: 1, todo: 'Acheter du lait'},
        {id: 2, todo: 'Acheter du pain'}
    ])

    const [warning, setWarning] = useState(false)

    const list = todos.map(todo => {
        return (
            <li key={todo.id} className="list-group-item">{todo.todo}</li>
        )
    })

    const addNewToto = (newTodo) => {

        if(newTodo !== '') {
            setTodos([...todos, {
                id: uuidv4(),
                todo: newTodo
            }])
            setWarning(false)
        }
        else {
            setWarning(true)
        }
    }

    const warningMess = warning && <div className="alert alert-danger" role="alert">Veuillez indiquez un To-do</div> 

    return (
        <div className="text-center">
            <h1>{todos.length} To-do</h1>
            <hr />
            {warningMess}
            <ul className="list-group">
                {list}
            </ul>

            <AddTodoForm addNewTodo={addNewToto} />
        </div>
    )
}
