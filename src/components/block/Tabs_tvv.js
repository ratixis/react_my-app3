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
                    <div className= {toggleState=== 1 ?"tabs active-tabs" : "tabs"} onClick={()=> toggleTab(1)} > MYD14A1 </div>
                    <div className= {toggleState=== 2 ?"tabs active-tabs" : "tabs"} onClick={()=> toggleTab(2)} > MOD14A1</div>
                    <div className= {toggleState=== 3 ?"tabs active-tabs" : "tabs"} onClick={()=> toggleTab(3)} > FIRMS </div>
                </div>

         <div className="content-tabs">
                <div className= {toggleState=== 1 ? "content active-content"  : "content"}  >
                <h>MYD14A1</h>
                <hr />
                    <p>
                  
                   <PremYCalendar/>                  
               
                </p>    
         </div>

        <div className= {toggleState=== 2 ? "content active-content"  : "content"} >
                    <h2>MOD14A1</h2>
                    <hr />
                    <p>
                    <PremYCalendar/>  
                    </p>

                    </div>

        <div  className= {toggleState=== 3 ? "content active-content"  : "content"}   >
                        <h2> FIRMS </h2>
                        <hr />
                        <p>
                        <PremYCalendar/>  
                        </p>

                </div>
            </div>
       </div>
       </>
  );
}

export default Tabs_tvv;