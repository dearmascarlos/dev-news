import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { createContext, useState } from 'react'

export const searchContext = createContext({})

function App() {
  const [search, setSearch] = useState('')

  return (
    <searchContext.Provider value={{ search, setSearch }}>
      <div className="App">
        <RouterProvider  router={router}/>
      </div>
    </searchContext.Provider>
  )
}

export default App
