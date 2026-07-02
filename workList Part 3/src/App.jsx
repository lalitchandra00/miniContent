import { useState, useEffect } from 'react'
import { TodoContextProvider } from './context/TodoContext'
import './App.css'  
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(), todo:todo,completed:false}, ...prev])
  }
  
  const updateTodo = (id, todo) => {
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo, todo:todo}:prevTodo)))
  }
  // This will update the dodo list, in prev all the previous value comes, with the help of map funciton we iterate to the each and every value present inside prev and each value stored in prevTodo then we take the prevTodo.id if it matched by the id passed then we take that prevTodo part and changes todo in it else keep the same

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  // In this we go to each part and creates new arrau which doesnot contain the id which we have passes


  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id == id ? {...prevTodo, completed : prevTodo.toggleCompleted}: prevTodo)))
  }
  // This will update the dodo list, in prev all the previous value comes, with the help of map funciton we iterate to the each and every value present inside prev and each value stored in prevTodo then we take the prevTodo.id if it matched by the id passed then we take that prevTodo part and  toggles todo in it else keep the same

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    const todos = JSON.stringify(localStorage.setItem("todos", todos))
  }, [todos])

  return (
    <TodoContextProvider value = {{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */} 
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
