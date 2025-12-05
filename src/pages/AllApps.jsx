import { useState, useMemo, useEffect } from 'react'
import appsData from '../data/apps.json'
import AppCard from '../components/AppCard'
import Loader from '../components/Loader'
import { Link } from "react-router-dom";


export default function AllApps() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [sort, setSort] = useState('')

  // Fake loading effect for smooth UX
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(timer)
  }, [query, sort])

  // Filtering + sorting logic
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = appsData.filter(a => a.title.toLowerCase().includes(q))

    if (sort === 'high-low') {
      list = [...list].sort((a, b) => b.downloads - a.downloads)
    }
    if (sort === 'low-high') {
      list = [...list].sort((a, b) => a.downloads - b.downloads)
    }

    return list
  }, [query, sort])

  return (
    <main className="max-w-7xl mx-auto p-6">

      {/* PAGE TITLE */}
      <div className="text-center mt-6">
        <h1 className="text-2xl md:text-3xl font-bold">Our All Applications</h1>
        <p className="text-gray-500 text-sm mt-1">
          Explore All Apps developed by us. We code for Millions.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left: total count */}
        <div className="text-gray-700 font-medium">
          ({filtered.length}) Apps Found
        </div>

        {/* Right: search + sort */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="🔍  search Apps"
            className="border border-gray-300 p-2 px-4 rounded-lg w-52 focus:outline-none focus:ring focus:ring-purple-200"
          />

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 p-2 px-3 rounded-lg focus:outline-none focus:ring focus:ring-purple-200"
          >
            <option value="">Sort</option>
            <option value="high-low">Downloads: High → Low</option>
            <option value="low-high">Downloads: Low → High</option>
          </select>

        </div>
      </div>

      {/* LOADER */}
      {loading && (
        <div className="mt-10">
          <Loader />
        </div>
      )}

      {/* APPS GRID */}
      {!loading && (
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filtered.length === 0 ? (
            <div className="col-span-full flex flex-col items-center text-center p-6 border rounded-lg bg-gray-50">

  <img
    src="../assets/App-Error.png"   // FIX: Public folder images must use /Name.ext
    alt="Not Found"
    className="w-48 h-48 object-contain opacity-80"
  />

  <p className="text-gray-600 mt-4 text-lg font-medium">
    OOPS!! APPS NOT FOUND
  </p>
  <p>The App you are requesting is not found in our system. Please try another app.</p>

  {/* ✅ GO BACK BUTTON */}
  <Link
    to="/"
    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  >
    Go Back
  </Link>
</div>

          ) : (
            filtered.map(app => <AppCard key={app.id} app={app} />)
          )}

        </section>
      )}

    </main>
  )
}
