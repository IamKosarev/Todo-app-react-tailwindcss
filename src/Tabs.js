import React from "react"

const Tabs = ({ tab, toggleTab }) => {
  return (
    <div className="flex justify-around bg-white mt-10 border-b">
      <button
        onClick={() => toggleTab("All")}
        className="group w-20 md:w-28 text-center relative"
      >
        <div className="py-5">All</div>
        <div
          className="absolute bg-blue-500 w-20 md:w-28 h-2 bottom-0 rounded-3xl "
          style={
            tab === "All" ? { visibility: "visible" } : { visibility: "hidden" }
          }
        ></div>
      </button>
      <button
        onClick={() => toggleTab("Active")}
        className="group w-20 md:w-28 text-center relative"
      >
        <div className="py-5">Active</div>
        <div
          className="absolute bg-blue-500 w-20 md:w-28 h-2 bottom-0 rounded-3xl"
          style={
            tab === "Active"
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        ></div>
      </button>
      <button
        onClick={() => toggleTab("Completed")}
        className="group w-20 md:w-28 text-center relative"
      >
        <div className="py-5">Completed</div>
        <div
          className="absolute bg-blue-500 w-20 md:w-28 h-2 bottom-0 rounded-3xl"
          style={
            tab === "Completed"
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        ></div>
      </button>
    </div>
  )
}

export default Tabs
