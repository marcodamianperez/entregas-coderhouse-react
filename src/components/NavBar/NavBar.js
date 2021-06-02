import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = props => {
    return (
        <nav className="indigo darken-1">
            <div className="nav-wrapper container">
                <a href="index.html" className="brand-logo">{props.logo}</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="index.html">{props.link1}</a></li>
                    <li><a href="index.html">{props.link2}</a></li>
                    <li><a href="index.html">{props.link3}</a></li>
                    <li><a href="index.html">{props.link4}</a></li>
                    <CartWidget />
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;