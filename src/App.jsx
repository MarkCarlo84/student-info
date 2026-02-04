import { Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import HomePage from './pages/HomePage'
import StudentsPage from './pages/StudentsPage'

function App() {
  return (
    <>
      <HeaderComponent />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentsPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App

