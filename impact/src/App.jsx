import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./views/home";
import MainWrapper from "./layouts/MainWrapper";
import Login from "./views/login";
import PrivateRoute from "./layouts/PrivateRoute";
import Logout from "./views/logout";
import Private from "./views/private";
import Register from "./views/register";
import HomePage from "./views/homepage";

function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <Routes>
          <Route
            path="/private"
            element={
              <PrivateRoute>
                <Private />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
