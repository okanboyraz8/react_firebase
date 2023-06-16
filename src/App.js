import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUsers(user)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])

  return (
    <div>
      <BrowserRouter>
      {users?.accessToken && <Navbar/>}
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="dashboard" element={<Home users={users} />} />
      </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="light"
      />
    </div>
  );
}

export default App;
