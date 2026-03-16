import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Login from './components/Login'
import Body from './components/Body'
import Profile from './components/Profile'
import {Provider} from "react-redux"
import appStore from "./utils/appStore"
import Feed from './components/Feed'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <Provider store = {appStore}>
        <BrowserRouter basename="/">
          <Routes>
          <Route path= "/" element = {<Body/>}>
          <Route path= "/feed" element = {<Feed/>}/>
            <Route path= "/login" element = {<Login/>}/>
            <Route path= "/profile" element = {<Profile/>}/>
          </Route>
            {/* <Route path= "/profile" element = {<div>Profile page</div>}/> */}
          </Routes>
        </BrowserRouter>
      </Provider>

    {/* <div className="p-6">
      <button className="btn btn-primary">Primary Button</button>
      <div className="card w-96 bg-base-100 shadow-xl mt-6">
        <div className="card-body">
          <h2 className="card-title">Hello!</h2>
          <p>DaisyUI is working if you see colors!</p>
        </div>
      </div>
    </div> */}
  
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
