import { useState } from "react";
import "./projs.css";
import PremCalendar from "../calendar/PremCalendar";

function Tabs_met() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    <div className="containerrss"> 
                <div className="bloc-tabs">
                    <div className= {toggleState=== 1 ?"tabs active-tabs" : "tabs"} onClick={()=> toggleTab(1)} > MOD09GQ </div>
                    <div className= {toggleState=== 2 ?"tabs active-tabs" : "tabs"} onClick={()=> toggleTab(2)} > MOD09GQ + FIRMS </div>
                    
                </div>

         <div className="content-tabs">
                <div className= {toggleState=== 1 ? "content active-content"  : "content"}  >
                <h>MODO9GQ</h>
                <hr />
                    <p>
                    The MOD09GQ Version 6.1 продукт предоставляет оценку спектральной отражательной 
                    способности поверхности спектрорадиометра Terra Moderate Resolution Imaging (MODIS)
                     в диапазонах 250 метров (м) 1 и 2, скорректированную на атмосферные условия, такие как газы,
                      аэрозоли и рэлеевское рассеяние.
                    
                     <PremCalendar />  

                </p>   
                
         </div>

        <div className= {toggleState=== 2 ? "content active-content"  : "content"} >
                    <h2>MODO9GQ + FIRMS</h2>
                    <hr />
                    <p>
                    + The Fire Information for Resource Management System (FIRMS) Система позволяет получать оперативную информацию о местоположении пожаров (hotspots), 
                    как центров пикселей 1х1 км на основе автоматического регистрирования высокого отражения 
                    в тепловых каналах спектра солнечного излучения  снимков с камеры MODIS (Moderate Resolution Imaging Spectroradiometer),
                     установленной на спутниках  Terra и Aqua. Для мониторинга используется стандартный продукт MODIS Land MOD14/MYD14
                    (Fire and Thermal Anomalies).
                    <PremCalendar />
                    
                    </p>

                    </div>

       
            </div>
       </div>
       </>
  );
}

export default Tabs_met;