import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import TodoList from './todoList'
import AddTodoList from './addTodoList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const Todo = [
    { id: 1, title: 'hoc js co ban' },
    { id: 2, title: 'hoc php co ban' },
    { id: 3, title: 'hoc java co ban' },
    { id: 4, title: 'hoc reactjs co ban' },
  ]
  const [item, setItem] = useState([...Todo])
  // console.log(item);
  // const handleDele = (id) => {
  //   const newTodo = item.filter(todo => todo.id !== id)
  //   setItem(newTodo)
  // }
  const TodoClick = (id) => {
    // console.log(id);
    const newTodo = item.filter(todo => todo.id !== id)
    setItem(newTodo)
  }
  const todoSubmit = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 100000 + 5),
      ...todo,
    }
    const newItem = [...item]
    // setItem([...item, todo])
    newItem.push(newTodo)

    setItem(newItem);

  }
  return (
    <>
      <AddTodoList handleSubmit={todoSubmit} />
      <TodoList todos={item} onTodoClick={TodoClick} />

    </>
  )
}
