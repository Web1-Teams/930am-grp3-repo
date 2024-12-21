//import
import logo from "../assests/images/Picsart_24-12-11_00-26-28-373.jpg";
import '../styles/nav.css';
//function
const Nav=()=>{
    return(
        <div className="lol">
        <nav className="main-menu page">
            <div className="navbar">
                <div className="logo">
                    <a href="home.html"><img src={logo} alt="Logo" title="Website Logo" /></a>
                </div>
                <ul className="navigation">
                    <li className="menu-item-10"><a title="Home" href="home.html">Home</a></li>
                    <li className="menu-item-11"><a title="About" href="..//page 5/about.html">Abouttt</a>
                        <ul role="menu" className="submenu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1"><a href="..//page 5/leadership.html">Contact Us</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-12"><a title="Animal Care" href="home.html">Animal Care</a>
                        <ul role="menu" className="submenu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2"><a href="home.html">Advice</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3"><a href="home.html">Health</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4"><a href="home.html">Articles</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-13"><a title="Support" href="home.html">Support</a></li>
                    <li className="menu-item-14"><a title="Volunteer" href="home.html">Volunteer</a></li>
                    <li className="menu-item-15"><a title="Report" href="home.html">Report</a></li>
                    <li className="menu-item-16"><a title="Login" href="home.html">Login</a></li>
                    <button className="Donate">
                        <span>Donate</span>
                    </button> 
                </ul>
            </div>
        </nav>
    </div>
    )
}
//export
export default Nav