import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import CreateStore from "./pages/createStore/CreateStore";
import MyStore from "./pages/myStore/MyStore";
import CreateStore2 from "./pages/createStore/CreateStore2";
import test from "./components/TestTEST";
function App() {
  const { authUser } = useAuthContext();
  console.log(authUser);
  return (
    <div className="pt-20 p-5 min-h-screen ">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/CreateStore"
          element={authUser ? <CreateStore2 /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/MyStore"
          element={authUser ? <MyStore /> : <Navigate to={"/login"} />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
