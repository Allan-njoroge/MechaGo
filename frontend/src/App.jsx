import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Pages from the global folder
import { SignUp, Login } from "@/pages/global"
// Pages from the client folder
import {  } from "@/pages/client"
// Pages from the provider folder
import { } from "@/pages/provider"

function App() {
  return (
    <Router>
      <Routes>

        {/*=====  global pages  =====*/}
        <Route element={<SignUp />} path="/" />
        <Route element={<Login />} path="/login" />

        {/*======  client pages  =====*/}

        {/*=====  provider pages  =====*/}

      </Routes>
    </Router>
  )
}

export default App
