import './App.css'
import {Routes, Route} from "react-router-dom";
import Header from "@/components/header/Header.tsx";
import {TodosPage} from "@/components/pages/todos/Todos.page.tsx";


function App() {

  return (
       <Routes>
            <Route path={'/'} element={<Header/>} ></Route>
            <Route path={'/todos'} element={<TodosPage/>} ></Route>
       </Routes>
  )
}

export default App
