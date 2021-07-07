
import {NavLink} from 'react-router-dom' 
const Leftpane = () => {
    return (
    <div className="left-pane">
    <div className="container">

<header>
     icon here
</header>
<nav>
<NavLink to="/">
    <span>Home</span>
</NavLink>
<NavLink to="/explore">
    <span>Explore</span></NavLink>
<NavLink to="/notification">
    <span>Notification</span></NavLink>
<NavLink to="/Messages">
    <span>Message</span></NavLink>
<NavLink to="/Bookmarks">
    <span>Bookmarks</span></NavLink>
<NavLink to="/List">
    <span>List</span></NavLink>
<NavLink to="/profile">
    <span>Profile</span></NavLink>
</nav>
<button className="more">
    <span>More</span>
    </button>
<footer>
    <button className="account">
    <div className="photo">
     <img
     alt="user"
     src=" "
    img/>


    </div>
<div>
   <div className="name">Harshit Gautam</div>
   <div className="username">@harshitgtm</div>
</div>

    </button>
</footer>
</div>

 </div>





    )
}
export default Leftpane;