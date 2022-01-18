import "./App.css"
import React from "react"
import Apple from "./components/Apple.js"
import Orange from "./components/Orange.js"
import Banana from "./components/Banana.js"
/*
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
*/
export default function App() {
  return (
    <div className="App">
      <h1>React Router v5</h1>
      <button>Apple</button>
      <button>Orange</button>
      <button>Banana</button>
      <button>Home</button>
      <Apple />
      <Orange />
      <Banana />
      <h1>This is Home</h1>
      <h1>No Page Found!</h1>
    </div>
  )
}
