import React from "react"

const AddTodo = ({ handleAddTodo, todoNameRef }) => {
  return (
    <form className="mt-5 flex justify-between">
      <input
        className="p-2 md:p-3 rounded-xl border border-gray-500 w-8/12 sm:w-9/12"
        ref={todoNameRef}
        type="text"
        placeholder="Add details..."
      />
      <button
        className="bg-blue-500 text-white py-1 px-3 md:py-2 md:px-6 rounded-xl shadow-lg hover:bg-blue-600"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
