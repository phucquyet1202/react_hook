import React, { useState } from 'react'

const AddTodoList = ({ handleSubmit }) => {
    const [value, setValue] = useState('')
    const changValue = (e) => {
        setValue(e.target.value)
    }
    const todoSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            title: value
        }
        handleSubmit(newTodo);
        setValue('')
    }
    // console.log(value);

    return (
        <div>
            <form onSubmit={todoSubmit}>
                <input type="text" value={value} onChange={changValue} />
            </form>
        </div>
    )
}

export default AddTodoList