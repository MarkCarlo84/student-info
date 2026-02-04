import { useState, useEffect } from 'react'
import StudentComponent from '../components/StudentComponent'

const API_URL = 'https://jsonplaceholder.typicode.com/users'
const COURSES = ['BS Computer Science', 'BS IT', 'BS Software Engineering', 'BS Data Science']

/** Maps JSONPlaceholder user object to student shape (name, course, year). */
function mapUserToStudent(user) {
  return {
    id: user.id,
    name: user.name,
    course: COURSES[user.id % COURSES.length],
    year: (user.id % 4) + 1,
  }
}

function StudentsPage() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchStudents() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(API_URL)
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
        const data = await res.json()
        if (!cancelled) {
          setStudents(data.map(mapUserToStudent))
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Failed to load students.')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchStudents()
    return () => { cancelled = true }
  }, [])

  if (loading) {
    return (
      <div className="state-box">
        <p>Loading students...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="state-box error">
        <p><strong>Error:</strong> {error}</p>
        <p>Please check your connection and try again.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="page-heading">Students (from API)</h2>
      <p className="page-intro">
        Data fetched from JSONPlaceholder (users), displayed as students.
      </p>
      {students.map((student) => (
        <StudentComponent
          key={student.id}
          name={student.name}
          course={student.course}
          year={student.year}
        />
      ))}
    </div>
  )
}

export default StudentsPage
