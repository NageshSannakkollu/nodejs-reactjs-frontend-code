import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import UpdatePage from "./components/UpdatePage"
import AddPage from "./components/AddPage"
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/update/:id" element={<UpdatePage/>}/>
      <Route exact path="/add_task/" element={<AddPage/>}/>
    </Routes>
  </BrowserRouter>
  )


export default App