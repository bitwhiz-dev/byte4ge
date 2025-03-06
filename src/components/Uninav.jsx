import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { Link } from 'react-router-dom';

const SecondNavbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <Link to="/">
                <img src={logo} alt="byte4ge" className="w-[150px] h-[40px]" />
            </Link>

            <ul className="list-none sm:flex hidden justify-end items-center mr-[10px] flex-1">
                <li className="font-poppins font-normal cursor-pointer text-[16px] text-white">
                    <Link to="/" className='mr-[40px] '>Home</Link>
                    <Link to="/contact" className='mr-[40px] '>Contact</Link>
                    <Link to="/login">Login</Link>
                </li>
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">

                <Link to="/" className="font-poppins font-normal cursor-pointer text-[16px] text-white ml-4">
                    <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1ElEQVR4nO3SsQ4BQRAG4J9CtBL1RaMUBa+g8xQ6T8EraG5nK42Kh5AQpVZDJUItOpH8ksvdEVbu7G2icJP83ew3mckCf1PU8KiwDqLhucYbFOwpYBCFI3203OAKHQrOMf7IhT662XAfPSpcDXi0yY0a/e9hokCF4Uf4fdCIAxTT4VOUKJikxiXOjGOUk05SoWBugTPcZEWNqhlXqFGwscYlzpYK9Ve8ScHBAc4wJwrazwN2DnFGm5hPlRFG4i/61QBY9uUD+I8nUlgaHi5s+/JCUt0BBYuC0bfcuUMAAAAASUVORK5CYII=" />
                    </div>
                </Link>


            </div>
        </nav>
    );
};

export default SecondNavbar;
