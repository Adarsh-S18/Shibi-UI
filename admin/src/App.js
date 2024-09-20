import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppManagement from "./pages/AppManagement";
import ProtectedRoute from "./protectedRoute";
import Login from "./pages/LoginManagement"; // Ensure Login component is imported

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <AppManagement />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
