import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AllApps from '../pages/AllApps'
import AppDetails from '../pages/AppDetails'
import MyInstallation from '../pages/MyInstallation'
import ErrorPage from '../pages/ErrorPage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TopLoader from '../components/TopLoader'

export default function AppRouter(){
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopLoader />
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/apps" element={<AllApps/>} />
          <Route path="/apps/:id" element={<AppDetails/>} />
          <Route path="/installation" element={<MyInstallation/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

