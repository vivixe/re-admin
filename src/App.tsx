import { Fragment } from 'react'
import Login from './pages/login'
import Home from './pages/home'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Routes>
          {/* 需要navigate */}
          <Route path="/login" element={<Login navigate={Navigate} />} />
          {/* 不需要navigate */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </HashRouter>
    </Fragment>
  )
}

export default App