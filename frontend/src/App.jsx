import { useAuth } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router-dom"; // use react-router-dom not react-router

import AuthPage from "./pages/AuthPage";
import CallPage from "./pages/CallPage";
import HomePage from "./pages/HomePage";

const App = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  return (
    <Routes>
      <Route path="/" element={isSignedIn ? <HomePage /> : <Navigate to="/auth" replace />} />
      <Route path="/auth" element={!isSignedIn ? <AuthPage /> : <Navigate to="/" replace />} />

      <Route
        path="/call/:id"
        element={isSignedIn ? <CallPage /> : <Navigate to="/auth" replace />}
      />

      <Route
        path="*"
        element={isSignedIn ? <Navigate to="/" replace /> : <Navigate to="/auth" replace />}
      />
    </Routes>
  );
};

export default App;
