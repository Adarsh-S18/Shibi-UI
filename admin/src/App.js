import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppManagement from "./pages/AppManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
