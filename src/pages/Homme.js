import"../components/header/style.css";
import { NavLink } from "react-router-dom";
import faire2 from './../img/faire2.mp4';

function Homme () {
 
    

    return(
   
   <div className="header">
        

  <video src={faire2} autoPlay muted loop className= "video-bg"/>
 <div className="bg-overlay"></div>

     <div className="text-home"> 
            <h1> Республика Саха (Якутия) </h1>
           
            <p> Здесь вы можете найти данные о пожарной ситуации в Якутии с 2002г по 2021г</p>
            
     </div>
    
     <div className={"avt"}>
     <NavLink to='/' className="logo">
             <button  className="rr yy buttonn"> Выход </button>                        
              </NavLink>                  
     </div>
     
             
    </div>
     
    );
}
export default Homme;