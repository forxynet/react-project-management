import { NavLink } from "react-router-dom"
import Avatar from "./Avatar";

// styles & images
import "./Sidebar.css"
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'

export default function Sidebar({ user }) {

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar user={user} />
          <p>{user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}