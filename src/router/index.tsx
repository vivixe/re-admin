import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App