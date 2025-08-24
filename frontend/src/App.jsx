import { useAuth } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import CallPage from "./pages/CallPage";
import HomePage from "./pages/HomePage";
import { LoaderIcon } from "lucide-react";

const App = () => {
  const { isSignedIn, isLoaded } = useAuth();

if (!isLoaded) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
      <div className="flex flex-col items-center gap-4">
        <LoaderIcon className="w-12 h-12 animate-spin text-white" />
        <p className="text-white text-lg font-semibold animate-pulse">
          Preparing your space...
        </p>
      </div>
    </div>
  );
}

  return (
    <Routes>
      <Route
        path="/"
        element={isSignedIn ? <HomePage /> : <Navigate to="/auth" replace />}
      />
      <Route
        path="/auth"
        element={!isSignedIn ? <AuthPage /> : <Navigate to="/" replace />}
      />
      <Route
        path="/call/:id"
        element={isSignedIn ? <CallPage /> : <Navigate to="/auth" replace />}
      />
      <Route
        path="*"
        element={
          isSignedIn ? (
            <Navigate to="/" replace />
          ) : (
            <Navigate to="/auth" replace />
          )
        }
      />
    </Routes>
  );
};

export default App;
