import { NavLink } from 'react-router-dom'
import "../assets/styles/header.css"

function Header() {
    return (
        <header>
            <ul>
                <li><NavLink className={({ isActive }) => (isActive ? "active" : "")} to='/' exact="true">Inicio</NavLink></li>
                <li><NavLink to='/about'>Sobre Mi</NavLink></li>
                <li><NavLink to='/projects' >Proyectos</NavLink></li>
                <li><NavLink to='/contact' >Contacto</NavLink></li>
            </ul>

        </header>
    )
}

export default Header;