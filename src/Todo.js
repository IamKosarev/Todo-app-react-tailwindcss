import React from "react"

const Todo = ({ todo, toggleTodo, tab, handleDeleteTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id)
  }

  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id)
  }

  return (
    <div className="justify-center mt-3 relative">
      <label className="inline-flex items-center">
        <input
          className="form-checkbox h-6 w-6 text-blue-600"
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        <div
          className="ml-2"
          style={todo.complete ? { textDecoration: "line-through" } : null}
        >
          {todo.name}
        </div>
      </label>
      {tab === "Completed" ? (
        <button
          className="material-icons absolute right-0 bottom-0.5 text-3xl text-gray-400 hover:text-gray-600"
          onClick={handleDeleteClick}
        >
          delete_outline
        </button>
      ) : null}
    </div>
  )
}

export default Todo
