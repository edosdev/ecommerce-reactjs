import "./Navbar.css";
import CartWidget from "../Cart/CarWidget.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeSwitch from "./ThemeSwitch";

const evento_menu = () => {
  const menu = document.querySelector("#menu");
  if (menu === ":hidden") {
    menu.classList.toggle("sm:visible");
  } else {
    menu.classList.toggle("sm:hidden");
  }
};

const Navbar = () => {
  const { temaOscuro } = useContext(ThemeContext);
  // console.log("state conext desde el navbar", temaOscuro);
  return (
    <header className="bg-primary">
      <nav className="flex container items-center justify-between flex-wrap p-6 mx-auto">
        <div className=" logo-container flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <img className="logo" src="/logo-pizzatop.png" alt="description" />
          </Link>
        </div>
        <div className="menu-mobile flex items-center ">
          <div className="block lg:hidden">
            <button onClick={evento_menu} class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
              <svg className="fill-white h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <CartWidget />
        </div>
        <div id="menu" className="w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:hidden">
          <div className="text-md lg:flex-grow">
            <ul class="menu menu-horizontal p-0">
              <li tabindex="0">
                <Link to="/" className="mt-4 lg:mt-0 text-white hover:font-bold text-white mr-4  ">
                  Pizzas
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul class="p-4 bg-base-100 z-10">
                  <li>
                    <Link to="/categoria/eventos">Para Eventos</Link>
                  </li>
                  <li>
                    <Link to="/categoria/vegetariano">Vegetariano</Link>
                  </li>
                  <li>
                    <Link to="/categoria/picante">Picante</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold text-white mr-4  ">
              <Link to="/promociones">Promociones</Link>
            </a>
            <a href="#ss" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold text-white mr-4 ">
              <Link to="/serviciones-adicionales">Servicios Adicionales</Link>
            </a>
          </div>
          <div>
            <div className=" btn btn-secondary inline-block text-sm px-10 py-4 leading-none rounded  text-neutral font-bold uppercase  mt-4 lg:mt-0">
              <Link to="/contacto">Contactos</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
