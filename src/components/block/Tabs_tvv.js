import { useState } from "react";
import "./projs.css";
import PremYCalendar from "../calendar/PremYCalendsr";


function Tabs_tvv() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    <div className="containerrss"> 
                <div className="bloc-tabs">
                    <div className= {toggleState=== 1 ?"tabs active-tabs" : "tabs"} onClick={()=> toggleTab(1)} >  </div>
                    
                </div>

         <div className="content-tabs">
                <div className= {toggleState=== 1 ? "content active-content"  : "content"}  >
                <h></h>
                <hr />
                    <p>Выберите год, который вам нужен.Затем выберите продукт, который вам интересен и нажмите кнопку "Найти".</p> 
                  <br/><br/><br/>
                   <PremYCalendar/>                  
               
                   
         </div>

        

         
            </div>
       </div>
       </>
  );
}

export default Tabs_tvv;