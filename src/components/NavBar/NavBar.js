
import './Navbar.css'
import CartWidget  from "../Cart/CarWidget.js";


  const evento_menu = () => {
    const menu = document.querySelector("#menu");
       if (menu === ":hidden") {
         menu.classList.toggle("sm:visible");
       }else {
         menu.classList.toggle("sm:hidden");
       }

  };


const Navbar = () => {

  return (
    <header className="bg-primary">
      <nav className="flex container items-center justify-between flex-wrap p-6 mx-auto">
        <div className=" logo-container flex items-center flex-shrink-0 text-white mr-6">
          <img className="logo" src="./logo-pizzatop.png" alt="description" />
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
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold text-white mr-4 ">
              Menu
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold text-white mr-4 ">
              Promociones
            </a>
            <a href="#ss" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold text-white mr-4 ">
              Servicios Adicionales
            </a>
          </div>
          <div>
            <a href="#sas" className="inline-block text-sm px-10 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-primary hover:bg-white mt-4 lg:mt-0">
              Contactos
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}




export default Navbar;
