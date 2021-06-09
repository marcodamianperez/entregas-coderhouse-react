import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = props => {
    return (
        
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div className='container'>
                    <a href='index.html' className='navbar-brand'>{props.logo}</a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#toggleMobileMenu'
                        aria-controls='#toggleMobileMenu'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='toggleMobileMenu'>
                        <ul className='navbar-nav text-center ms-auto'>
                            <li>
                                <a className='nav-link' href='index.html'>{props.link1}</a>
                            </li>
                            <li>
                                <a className='nav-link' href='index.html'>{props.link2}</a>
                            </li>
                            <li>
                                <a className='nav-link' href='index.html'>{props.link3}</a>
                            </li>
                            <li>
                                <a className='nav-link' href='index.html'>{props.link4}</a>
                            </li>
                            <CartWidget />
                        </ul>
                    </div>
                </div>
            </nav>
        


        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div className="container">
        //         <a href="index.html" className="navbar-brand">{props.logo}</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item"><a className="nav-link" aria-current="page" href="index.html">{props.link1}</a></li>
        //                 <li className="nav-item"><a className="nav-link" href="index.html">{props.link2}</a></li>
        //                 <li className="nav-item"><a className="nav-link" href="index.html">{props.link3}</a></li>
        //                 <li className="nav-item"><a className="nav-link" href="index.html" tabindex="-1" aria-disabled="true">{props.link4}</a></li>
        //                 <CartWidget />
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
}

export default NavBar;