import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Contact from "./pages/Contact"

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
