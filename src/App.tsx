import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "@/components/header/Header.tsx";
import Login from "@/components/login/Login.tsx";

function App() {

  return (
          <Routes>
              <Route path="/" element={<Header/>}>
                  <Route path="/login" element={<Login/>}></Route>
              </Route>
          </Routes>
  )
}

export default App
