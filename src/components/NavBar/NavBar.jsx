import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {

  return (
    <nav className="navbar">
      <img className="icon-navbar" src="/img/logitech-icon.png" />
      <ul className="categories-navbar">
        <li className="categorie-navbar">Mouse</li>
        <li className="categorie-navbar">Teclados</li>
        <li className="categorie-navbar">Audio</li>
      </ul>
      <CartWidget />
    </nav>
  )
}
export default NavBar