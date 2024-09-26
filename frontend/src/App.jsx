import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import DashboardLayoutBranding from './components/DashboardLayoutBranding';
import { useAuth } from './contexts/AuthContext';
import Register from './components/Register';
    
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
              <DashboardLayoutBranding />
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
  );
}

export default App;
