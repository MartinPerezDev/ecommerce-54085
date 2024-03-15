import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {

  return (
    <nav className="navbar">
      <img className="icon-navbar" src="/img/icon.png" />
      <ul className="list">
        <li>Teclados</li>
        <li>Auriculares</li>
        <li>Microfonos</li>
      </ul>
      <CartWidget />
    </nav>
  )
}
export default NavBar