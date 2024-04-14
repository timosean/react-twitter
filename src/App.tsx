import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/posts" element={<h1>Post List Page</h1>} />
            <Route path="/posts/:id" element={<h1>Post Detail Page</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes>
    );
}

export default App;
