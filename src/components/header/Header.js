import"./style.css";

import faire2 from './../../img/faire2.mp4';

import Registration from "./../../pages/Registration";


import { useState } from "react";
import Authorization from "../../pages/Authorization";
function Header() {
 const[modalActive, setModalActive]= useState (false);
 const[modallActive, setModallActive] = useState (false);
    

    return(
   
   <div className="header">
        

  <video src={faire2} autoPlay muted loop className= "video-bg"/>
 <div className="bg-overlay"></div>

     <div className="text-home"> 
            <h1> Республика Саха (Якутия) </h1>
           
            <p> Здесь вы можете найти данные о пожарной ситуации в Якутии с 2002г по 2021г</p>
            
     </div>
     <div className={"avt"}>
                        
                        
             <button className="yy rr"  onClick={() => setModalActive(true)}> Регистрация </button>
              <Registration active={modalActive} setActive={setModalActive}/>
                        


             <button  className="rr"onClick={() => setModallActive(true)}> Войти </button> 
             <Authorization active={modallActive} setActive={setModallActive}/>                     
                                 
     </div>
     
                
    </div>
     
    );
}
export default Header;