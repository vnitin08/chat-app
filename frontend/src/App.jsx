import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import chatIcon from "./assets/chat_icon.png";

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center border-lime-700">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <div className="flex"> <img src={chatIcon} className="pr-20" /> <Login /></div>  } />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <div className="flex"> <img src={chatIcon} className="pr-20" /> <SignUp /></div>} />
      </Routes>
      <Toaster />
      {/* <img src={chatIcon} className="pl-20" /> */}
    </div>
  );
}

export default App;
