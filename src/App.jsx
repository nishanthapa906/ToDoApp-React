import React from 'react'
import Home from '../pages/Home'
import Todo from '../pages/Todo'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import EditTodo from '../pages/EditTodo'

function App() {
  return (
    <div>
       <Header />
      <Routes>
        <Route path ='/' element = {<Home/>} ></Route>
        <Route path ='/todo' element = {<Todo/>} ></Route>
        <Route path="/edittodo" element={<EditTodo />} />
      </Routes>
    </div>



  )
}

export default App
