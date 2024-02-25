import { useState } from "react"


function App() {
  const [color, setColour] = useState("olive")

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColour("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColour("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ background: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColour("orange")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ background: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColour("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ background: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColour("pink")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ background: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColour("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ background: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColour("hotpink")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ background: "hotpink" }}
          >
            Hot Pink
          </button>
          <button
            onClick={() => setColour("purple")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ background: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColour("white")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ background: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColour("black")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ background: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
