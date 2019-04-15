import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'

import './App.scss'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="counter">{count}</div>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  )
}

export default hot(App)
