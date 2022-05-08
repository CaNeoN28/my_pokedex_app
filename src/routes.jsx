import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokemon from "./pages/pokemon";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="pokemon/:id" element={<Pokemon />} />
      </Routes>
    </Router>
  )
}

export default AppRouter