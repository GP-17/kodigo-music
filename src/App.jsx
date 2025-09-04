import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar.jsx"
import Home from "./Pages/Home.jsx"
import Search from "./Pages/Search.jsx"
import Contact from "./Pages/Contact.jsx"

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<Search />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}
