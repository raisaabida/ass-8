import { useParams, useNavigate } from 'react-router-dom'
import apps from '../data/apps.json'
import { useState } from 'react'
import { addInstalled, isInstalled } from '../utils/storage'
import { ToastContainer, toast } from 'react-toastify'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

// Icons
import downloadsIcon from '../assets/icon-downloads.png'
import ratingsIcon from '../assets/icon-ratings.png'
import reviewsIcon from '../assets/icon-review.png'

export default function AppDetails(){
  const { id } = useParams()
  const navigate = useNavigate()
  const app = apps.find(a=> a.id === Number(id))
  const [installed, setInstalled] = useState(app ? isInstalled(app.id) : false)

  if(!app){
    return (
      <main className="p-6 text-center">
        <h2 className="text-xl font-semibold">App not found</h2>
        <p className="mt-2">The requested app does not exist.</p>
        <button onClick={()=>navigate('/apps')} className="mt-4 px-3 py-2 border rounded">Back to apps</button>
      </main>
    )
  }

  function handleInstall(){
    addInstalled(app)
    setInstalled(true)
    toast.success('App installed successfully')
  }

  const chartData = app.ratings.map((r,idx)=> ({name: ['1★','2★','3★','4★','5★'][idx], count: r.count}))

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <ToastContainer />

      {/* HEADER CARD */}
      <div className="bg-white border rounded-xl shadow p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">{app.title}</h1>
            <p className="text-gray-600 mt-1">Developed by {app.companyName}</p>
          </div>
          <button disabled={installed} onClick={handleInstall} className={`px-6 py-2 rounded-lg text-white ${installed ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}>
            {installed ? 'Installed' : `Install Now (${app.size} MB)`}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="flex items-center gap-3">
            <img src={downloadsIcon} className="w-10" />
            <div>
              <h3 className="text-lg font-bold">{app.downloads}M</h3>
              <p className="text-gray-600 text-sm">Downloads</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={ratingsIcon} className="w-10" />
            <div>
              <h3 className="text-lg font-bold">{app.ratingAvg}</h3>
              <p className="text-gray-600 text-sm">Average Ratings</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={reviewsIcon} className="w-10" />
            <div>
              <h3 className="text-lg font-bold">{app.reviews}K</h3>
              <p className="text-gray-600 text-sm">Total Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* RATINGS BAR CHART */}
      <div className="bg-white border rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">Ratings</h2>
        <div style={{width:'100%', height:260}}>
          <ResponsiveContainer>
            <BarChart data={chartData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="count" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="bg-white border rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{app.description}</p>
  <p className="text-gray-700 leading-relaxed mt-2">
    This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.

A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.

For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
  </p>
      </div>
    </main>
  )
}