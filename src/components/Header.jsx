import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const active =
    "text-purple-600 font-semibold underline underline-offset-4"
  const normal =
    "hover:text-purple-500 transition"

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/assets/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-purple-600">HERO.IO</span>
          </NavLink>
        </div>

        {/* Center: Navigation */}
        <nav className="flex items-center gap-6 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : normal)}
          >
            Home
          </NavLink>

          <NavLink
            to="/apps"
            className={({ isActive }) => (isActive ? active : normal)}
          >
            Apps
          </NavLink>

          <NavLink
            to="/installation"
            className={({ isActive }) => (isActive ? active : normal)}
          >
            Installation
          </NavLink>
        </nav>

        {/* Right: Contribute Button */}
        <div>
          <a
            href="https://github.com/"
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg flex items-center gap-2 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8a8 8 ..."></path>
            </svg>
            Contribute
          </a>
        </div>

      </div>
    </header>
  )
}
