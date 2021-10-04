import React, {useState} from 'react'

export default function AddTodoForm({addNewTodo}) {

    const [addTodo, setAddTodo] = useState('')

    const handleTodo = (e) => {
        e.preventDefault()
        addNewTodo(addTodo)

        setAddTodo('')
    }

    return (
        <div className="card card-body mt-3" onSubmit={handleTodo}>
            <form className="form-group">
                <label>Ajouter un To-do</label>
                <input onChange={(e) => {setAddTodo(e.target.value)}} value={addTodo} className="form-control" type="text"/>
                <input className="btn btn-success mt-3" type="submit" value="Ajouter"/>
            </form>
        </div>
    )
}
