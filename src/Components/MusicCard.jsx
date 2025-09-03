// src/components/MusicCard.jsx
import React from "react"

export default function MusicCard({ title, artist, cover }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center text-center shadow-md hover:scale-105 transition-transform">
      <img
        src={cover}
        alt={title}
        className="w-32 h-32 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400">{artist}</p>
    </div>
  )
}
