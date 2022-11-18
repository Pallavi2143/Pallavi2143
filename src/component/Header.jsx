import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <header id="header" className="fixed-top d-flex align-items-center ">
    <div className="container d-flex justify-content-between align-items-center">

      <div className="logo">
        <h1 className="text-light"><Link to="index.html"><span>Moderna</span></Link></h1>
    
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link className="active " to="/">Home</Link></li>
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header> 
        </div>
    )
}
export default Header;