import { useState } from 'react'

/**
 * Displays a single student with expandable details.
 * @param {string} name - Student name
 * @param {string} course - Course name
 * @param {number} year - Year level
 */
function StudentComponent({ name, course, year }) {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => setExpanded((prev) => !prev)

  return (
    <div className="student-card">
      <div className="student-row">
        <span className="student-name">{name}</span>
        <span className="student-meta">{course} · Year {year}</span>
      </div>
      <button type="button" className="btn" onClick={handleToggle}>
        {expanded ? 'Show less' : 'Show more'}
      </button>
      {expanded && (
        <div className="student-details">
          <p>Course: {course}</p>
          <p>Year: {year}</p>
        </div>
      )}
    </div>
  )
}

export default StudentComponent
