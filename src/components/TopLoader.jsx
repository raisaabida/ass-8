import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function TopLoader(){
  const loc = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    const t = setTimeout(()=> setLoading(false), 300)
    return ()=> clearTimeout(t)
  },[loc.pathname])

  return loading ? (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div className="h-1 bg-gradient-to-r from-blue-400 to-purple-600" style={{width:'40%'}}></div>
    </div>
  ) : null
}
