import { useState } from 'react'
import StudentComponent from '../components/StudentComponent'

const SAMPLE_STUDENTS = [
  { id: 1, name: 'John Cedric', course: 'BS Information Technology', year: 3 },
  { id: 2, name: 'Fren Sua', course: 'BS Information Technology', year: 2 },
  { id: 3, name: 'Mathew Saymo', course: 'BS Information Technology', year: 4 },
  { id: 4, name: 'Nerisa Endozo', course: 'BS Information Technology', year: 1 },
  { id: 5, name: 'Allan Dave', course: 'BS Information Technology', year: 2 },
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
