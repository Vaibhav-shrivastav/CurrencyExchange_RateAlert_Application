import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthScreen from "./components/AuthScreen";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [value, setValue] = useState("");
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setValue(email);
      setLogged(true);
    }
  }, []);

  return (
    <Router>
      <Navbar
        value={value}
        setValue={setValue}
        logged={logged}
        setLogged={setLogged}
      />
      <Routes>
        <Route
          path="/"
          element={
            logged ? (
              <Navigate to="/dashboard" />
            ) : (
              <>
                <div className="relative home">
                  <Home />
                </div>
                <AuthScreen
                  value={value}
                  setValue={setValue}
                  setLogged={setLogged}
                />
              </>
            )
          }
        />
        <Route
          path="/dashboard"
          element={logged ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}
