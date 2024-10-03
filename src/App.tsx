import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "@/components/header/Header.tsx";

function App() {

  return (
          <Routes>
              <Route path="/" element={<Header/>} />
          </Routes>
  )
}

export default App
