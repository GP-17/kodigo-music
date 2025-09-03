import React, { useState } from "react"

export default function Search() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()

    // Llamada a iTunes API (más sencilla para empezar)
    const response = await fetch(
      `https://itunes.apple.com/search?term=${query}&entity=musicTrack&limit=10`
    )
    const data = await response.json()
    setResults(data.results)
  }

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Buscar Música 🎶</h2>

      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca una canción o artista..."
          className="p-2 rounded-md text-black w-full"
        />
        <button
          type="submit"
          className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600"
        >
          Buscar
        </button>
      </form>

      <ul className="space-y-3">
        {results.map((track) => (
          <li
            key={track.trackId}
            className="bg-gray-800 p-3 rounded-md flex items-center"
          >
            <img
              src={track.artworkUrl60}
              alt={track.trackName}
              className="mr-4 rounded"
            />
            <div>
              <p className="font-semibold">{track.trackName}</p>
              <p className="text-sm text-gray-400">{track.artistName}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
