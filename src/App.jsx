import  {BrowserRouter ,Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import AppBar from './components/AppBar'
import VideoPage from './pages/VideoPage'

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<AppBar/>}>
             <Route index element={<LandingPage/>} />
             <Route path='video/:videoId' element={<VideoPage/>} />
          </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
