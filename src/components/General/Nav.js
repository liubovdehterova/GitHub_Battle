import {NavLink} from "react-router-dom";

const Nav = () => {
    const navLinks = ['Home', 'Popular', 'Battle'];
    return (
        <nav>
            <ul className='nav'>
                {navLinks.map((navLink, index) => (
                        <li key={index}>
                            <NavLink to={navLink === 'Home' ? '/' : navLink.toLowerCase()}>
                                {navLink}
                            </NavLink>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}
export default Nav;