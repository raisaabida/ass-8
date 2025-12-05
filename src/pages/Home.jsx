import { NavLink } from 'react-router-dom'
import apps from '../data/apps.json'
import AppCard from '../components/AppCard'

export default function Home() {
  const top = apps.slice(0, 8)

  return (
    <main className="max-w-6xl mx-auto p-4">

      {/* HERO SECTION */}
      <section className="text-center py-16 relative">

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          We Build <br />
          <span className="text-purple-500">Productive</span>{" "}
          <span className="text-gray-900">Apps</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a className="flex items-center gap-2 border px-5 py-2.5 rounded-lg shadow-sm bg-white" href="#">
            <img src="data:image/png;base64,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" className="w-5" />
            Google Play
          </a>

          <a className="flex items-center gap-2 border px-5 py-2.5 rounded-lg shadow-sm bg-white" href="#">
            <img src="data:image/jpeg;base64,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" className="w-5" />
            App Store
          </a>
        </div>

        <div className="relative mt-10 flex justify-center">
          <img src="/assets/hero.png" alt="" />
        </div>

      </section>

      {/* STATS */}
      <section className="mt-16 rounded-xl text-white text-center py-14 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg">

        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">

          <div>
            <p className="text-3xl font-extrabold">29.6M</p>
            <p className="text-sm opacity-90 mt-1">Total Downloads</p>
            <p className="text-xs mt-1 opacity-75">21% More Than Last Month</p>
          </div>

          <div>
            <p className="text-3xl font-extrabold">906K</p>
            <p className="text-sm opacity-90 mt-1">Total Reviews</p>
            <p className="text-xs mt-1 opacity-75">46% More Than Last Month</p>
          </div>

          <div>
            <p className="text-3xl font-extrabold">132+</p>
            <p className="text-sm opacity-90 mt-1">Active Apps</p>
            <p className="text-xs mt-1 opacity-75">31 More Will Launch</p>
          </div>

        </div>
      </section>

      {/* TRENDING */}
      <section className="mt-12">
        <div className="flex flex-col items-center justify-between">
          <h2 className="text-xl font-semibold text-center">
            Trending Apps <br />
            Explore All Trending Apps on the Market developed by us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 w-full">
            {top.map((a) => (
              <AppCard key={a.id} app={a} />
            ))}
          </div>
        </div>
      </section>

      {/* SHOW ALL BUTTON */}
      <div className="flex justify-center mt-10">
        <NavLink
          to="/apps"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Show All Apps →
        </NavLink>
      </div>

    </main>
  )
}
