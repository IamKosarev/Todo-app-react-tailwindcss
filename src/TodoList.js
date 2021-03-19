import React from "react"
import Todo from "./Todo"

const TodoList = ({
  todos,
  toggleTodo,
  handleClearTodos,
  tab,
  handleDeleteTodo,
}) => {
  return (
    <div className="mt-5">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            tab={tab}
            handleDeleteTodo={handleDeleteTodo}
          />
        )
      })}
      {(tab === "Completed" && todos.length > 0) ? (
        <button
          onClick={handleClearTodos}
          className="block ml-auto mt-6 bg-red-400 text-white py-2 px-6 rounded-xl shadow-lg hover:bg-red-500"
        >
          Clear Completed
        </button>
      ) : null}
    </div>
  )
}

export default TodoList
