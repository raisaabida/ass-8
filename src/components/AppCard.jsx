import { Link } from 'react-router-dom'

function Stars({value}){
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {Array.from({length:5}).map((_,i)=> (
        <svg key={i} className={`w-4 h-4 ${i < full ? '' : i===full && half ? 'opacity-90' : 'opacity-30'}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  )
}

export default function AppCard({app}){
  return (
    <Link to={`/apps/${app.id}`} className="block border rounded-lg p-3 hover:shadow-md transition-shadow bg-white">
      <div className="flex items-center gap-3">
        <img src={app.image} alt={app.title} className="w-16 h-16 object-cover rounded-md"/>
        <div className="flex-1">
          <div className="font-semibold">{app.title}</div>
          <div className="text-xs text-gray-500">{app.companyName}</div>
        </div>
        <div className="text-sm text-gray-600">{app.size} MB</div>
      </div>
      <div className="mt-3 text-sm text-gray-600 flex items-center justify-between">
        <div className="flex items-center gap-2"><Stars value={app.ratingAvg} /> <span className="text-gray-700">{app.ratingAvg}</span></div>
        <div className="text-xs text-gray-500">{app.downloads.toLocaleString()} downloads</div>
      </div>
    </Link>
  )
}
