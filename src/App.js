import React, { useState, useRef, useEffect } from "react"
import TodoList from "./TodoList"
import uuidv4 from "uuid/v4"
import Tabs from "./Tabs"
import AddTodo from "./AddTodo"

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const handleAddTodo = (e) => {
    e.preventDefault()
    const name = todoNameRef.current.value
    if (name === "") return
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  const handleClearTodos = () => {
    const newTodos = todos.filter((todo) => !todo.complete)
    setTodos(newTodos)
  }

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => id !== todo.id)
    setTodos(newTodos)
  }

  const [tab, setTab] = useState("All")

  const toggleTab = (label) => {
    setTab(label)
  }

  return (
    <div className="container mx-auto text-gray-800 py-3 px-40 text-xl">
      <div className="font-bold text-4xl text-center mt-12">Todo App</div>
      <Tabs tab={tab} toggleTab={toggleTab} />
      <AddTodo handleAddTodo={handleAddTodo} todoNameRef={todoNameRef} />
      {tab === "All" ? (
        <TodoList todos={todos} toggleTodo={toggleTodo} tab={tab} />
      ) : null}
      {tab === "Active" ? (
        <TodoList
          todos={todos.filter((todo) => !todo.complete)}
          toggleTodo={toggleTodo}
          tab={tab}
        />
      ) : null}
      {tab === "Completed" ? (
        <TodoList
          todos={todos.filter((todo) => todo.complete)}
          toggleTodo={toggleTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleClearTodos={handleClearTodos}
          tab={tab}
        />
      ) : null}
    </div>
  )
}

export default App
