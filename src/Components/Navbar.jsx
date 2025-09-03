import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-10 h-10 mr-3"
        />
        <span className="text-xl font-bold text-white">Kodigo Music</span>
      </div>

      {/* Links */}
      <div className="flex gap-6">
        <Link to="/" className="text-white hover:text-green-400">
          Inicio
        </Link>
        <Link to="/buscar" className="text-white hover:text-green-400">
          Buscar
        </Link>
        <Link to="/contacto" className="text-white hover:text-green-400">
          Contacto
        </Link>
      </div>
    </nav>
  )
}
