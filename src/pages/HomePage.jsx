import { useState } from 'react'
import StudentComponent from '../components/StudentComponent'

const SAMPLE_STUDENTS = [
  { id: 1, name: 'Maria Santos', course: 'BS Computer Science', year: 3 },
  { id: 2, name: 'Juan Dela Cruz', course: 'BS Information Technology', year: 2 },
  { id: 3, name: 'Ana Reyes', course: 'BS Software Engineering', year: 4 },
]

function HomePage() {
  const [students] = useState(SAMPLE_STUDENTS)

  return (
    <div>
      <h2 className="page-heading">Welcome to Student Info App</h2>
      <p className="page-intro">
        View sample students below. Use the navigation to go to the Students page for API data.
      </p>
      <section>
        <h3 className="section-heading">Sample Students</h3>
        {students.map((student) => (
          <StudentComponent
            key={student.id}
            name={student.name}
            course={student.course}
            year={student.year}
          />
        ))}
      </section>
    </div>
  )
}

export default HomePage
