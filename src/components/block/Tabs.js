import { useState } from "react";
import "./projs.css";
import PremCalendar from "../calendar/PremCalendar";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    <div className="containerrss"> 
                <div className="bloc-tabs">
                    <div className= {toggleState=== 1 ?"tabs active-tabs" : "tabs"} onClick={()=> toggleTab(1)} > AAI </div>
                    <div className= {toggleState=== 2 ?"tabs active-tabs" : "tabs"} onClick={()=> toggleTab(2)} > CO </div>
                    <div className= {toggleState=== 3 ?"tabs active-tabs" : "tabs"} onClick={()=> toggleTab(3)} > AOD </div>
                </div>

         <div className="content-tabs">
                <div className= {toggleState=== 1 ? "content active-content"  : "content"}  >
                <h>AAI(Absorbing Aerosol Index)</h>
                <hr />
                    <p>
                    Среднемесячный индекс поглощающего аэрозоля (AAI), 
                    который может быть использован для определения присутствия аэрозолей, 
                    поглощающих ультрафиолетовое излучение, таких как пыль и дым
                    
              
                    <PremCalendar />

                </p>  
               
         </div>

        <div className= {toggleState=== 2 ? "content active-content"  : "content"} >
                    <h2>CO (Carbon Monoxide) </h2>
                    <hr />
                    <p>
                    Монооксид углерода (химическая формула CO) - ядовитый легковоспламеняющийся газ,
                     который не имеет цвета, запаха, вкуса и немного менее плотен, чем воздух.
                     <PremCalendar />
                    </p>

                    </div>

        <div  className= {toggleState=== 3 ? "content active-content"  : "content"}   >
                        <h2> AOD(Aerosol Optical Depth) </h2>
                        <hr />
                        <p>
                        Глубиной оптического аэрозоля (AOD) является мерой аэрозолей 
                        (e.г., городская дымка, частицы дыма, пыль пустыни, морская соль), 
                        распределенная в воздушном столбе от прибора (поверхность Земли) до верхней части атмосферы.
                        <PremCalendar />
                        </p>

                </div>
            </div>
       </div>
       </>
  );
}

export default Tabs;