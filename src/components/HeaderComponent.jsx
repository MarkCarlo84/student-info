import { Link } from 'react-router-dom'

/**
 * App header with title and navigation links.
 * @param {string} [title='Student Info App'] - Header title
 */
function HeaderComponent({ title = 'Student Info App' }) {
  return (
    <header className="app-header">
      <h1 className="app-title">{title}</h1>
      <nav className="app-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/students" className="nav-link">Students</Link>
      </nav>
    </header>
  )
}

export default HeaderComponent
