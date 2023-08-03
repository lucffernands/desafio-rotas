import { NavLink } from 'react-router-dom';
import './styles.css';

export default function CardProducts() {

    return (
        <div className="card-products-container container">
            <div className="card-products-menu-container">
                <NavLink to="/computers" className={({isActive}) => isActive ? "card-products-menu-item menu-active" : "card-products-menu-item"}>
                    Computadores
                </NavLink>
                <NavLink to="/eletronics" className={({isActive}) => isActive ? "card-products-menu-item menu-active" : "card-products-menu-item"}>
                    Eletrônicos
                </NavLink>
                <NavLink to="/books" className={({isActive}) => isActive ? "card-products-menu-item menu-active" : "card-products-menu-item"}>
                    Livros
                </NavLink>
            </div>

        </div>
    );
}           