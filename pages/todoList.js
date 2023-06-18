import React from 'react'

const TodoList = ({ todos, onTodoClick }) => {
    const handleDele = (id) => {
        onTodoClick(id);
    }
    return (
        <div>
            <h1>TodoList</h1>
            <table>
                {todos.map((it) => {
                    return <tr key={it.id}>
                        <p>{it.title}</p>
                        <button onClick={() => handleDele(it.id)}>x</button>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default TodoList