import './styles.css';
import home from '../../assets/home.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header>
            <nav className="navbar container">
                <div className="navbar-content-container">
                    <NavLink to="/home" className={({ isActive }) => isActive ? "navbar-menu-item navbar-active" : "navbar-menu-item"} >
                        Início
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "navbar-menu-item navbar-active" : "navbar-menu-item"} >
                        Produtos
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "navbar-menu-item navbar-active" : "navbar-menu-item"} >
                        Sobre nós
                    </NavLink>
                </div>
                <div className="navbar-home">
                    <Link to="/home">
                        <img src={home} alt="Home" />
                    </Link>

                </div>
            </nav>
        </header>
    );
}