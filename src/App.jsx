import React from "react";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function Banner() {
const location = useLocation();
const state = location.state;
return state?.flash ? (
<div className="banner" role="status">
{state.flash}
</div>
) : null;
}


export default function App() {
return (
<div className="app">
<header className="header">
<Link to="/login" className="brand"></Link>
</header>


<main className="container">
<Banner />
<Routes>
<Route path="/" element={<Navigate to="/login" replace />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="*" element={<Navigate to="/login" replace />} />
</Routes>
</main>



</div>
);
}