import"./style.css";
import log1 from "./../../img/icons/log1.png";
import { NavLink } from "react-router-dom";

function Navbar() {

    const activLink ='nav-list__link nav-list__link--active';
    const normalLink ='nav-list__link';

    return(
<>

        <nav className="nav">

        <div className="container">
            
        
               
            <div className="nav-row">
            <NavLink to="/Homme" className="logo">
                <img src={ log1 } alt="Light mode" className="users"/>
                </NavLink>
    

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/Homme" className={({isActive}) =>  isActive ? activLink: normalLink} > 
                        Главная </NavLink>
                    </li> 
                    
                    <li className="nav-list__item">
                        <NavLink to="/Statistics" className={({isActive}) =>  isActive ? activLink: normalLink} > 
                        Статистика </NavLink>
                    </li> 
                   
                    <li className="nav-list__item">
                        <NavLink to="/Project" className={({isActive}) =>  isActive ? activLink: normalLink} > 
                        Материалы </NavLink>
                    </li> 
                    
                </ul>
                
            </div>
        </div>
    </nav>
    </>
    );
}
export default Navbar;