import './index.css'
import {Link} from 'react-router'
const Header = () => (
  <nav className="nav-header">
    <h1 className="blog-title">Dev Blog</h1>
    <ul className="nav-menu">
      <li>
        <Link className="nav-Link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-Link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-Link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
