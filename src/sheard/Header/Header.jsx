import { Link } from "react-router-dom";


const Header = () => {
    const navItems = <>
      <li className="text-primary-color font-bold"><Link to={'/'}>Home</Link></li>
      <li className="text-primary-color font-bold"><Link to={'/about'}>About</Link></li>
      <li className="text-primary-color font-bold"><Link to={'/allProducts'}>All Products</Link></li>
      <li className="text-primary-color font-bold"><Link to={'/contact'}>Contact Us</Link></li>
    </>
    return (
        <div className="bg-white border-b border-primary-color">
            <div className="max-w-7xl mx-auto navbar border-r border-primary-color border-l">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className="text-xl text-primary-color font-extrabold">BabyJoyLand</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
          <a className="btn ml-3">Button</a>
        </div>
        </div>
      </div>
    );
};

export default Header;