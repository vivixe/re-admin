import { Fragment } from 'react'
import Login from './pages/login'
import Home from './pages/home'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          {/* 需要navigate */}
          <Route path="/login" element={<Login />} />
          {/* 不需要navigate */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App