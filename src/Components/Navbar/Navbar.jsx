
import logo from '../../assets/logo.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img   src={logo} className='navbar-icon' alt='icon'></img>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="navbar-icon-list">
        <li className="navbar-item-logo">
          <a href="https://github.com/rohitkr150015" title='Github'>
          <img 
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png" 
              alt="Github Icon" 
              className="navbar-icon"
            />
          </a>
        </li>
        <li className="navbar-item-logo">
         { /*linkdein item */}
         <a href="https://www.linkedin.com/in/rohit-kumar-31893725b/" title="Linkdein">
         <img 
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          alt="LinkedIn Icon" 
          className="navbar-icon"
        />
         </a>

        </li>
        <li className="navbar-item-logo">
          {/* Twitter -X logo */}
          <a href="#"
           title='X' >  
           <img 
              src="src/assets/twitter_logo.png" 
              alt="twitter Icon" 
              className="navbar-icon"
            />
            </a>
        </li>
      </div>
    </div>
  )
}

export default Navbar