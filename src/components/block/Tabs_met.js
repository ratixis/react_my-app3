import { useState } from "react";
import "./projs.css";
import PremYyCalendar from "../calendar/PremYyCalendar";
import PremYyMODISCalendar from "../calendar/PremYyMODISCal";
import PremYyNOAACalendar from "../calendar/PremYyNOAACalendar";


function Tabs_met() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    <div className="containerrss"> 
                <div className="bloc-tabs">
                    <div className= {toggleState=== 1 ?"tabs active-tabs" : "tabs"} onClick={()=> toggleTab(1)} > MOD09GQ_061 </div>
                    <div className= {toggleState=== 2 ?"tabs active-tabs" : "tabs"} onClick={()=> toggleTab(2)} > MODIS </div>
                    <div className= {toggleState=== 3 ?"tabs active-tabs" : "tabs"} onClick={()=> toggleTab(3)} > NOAA </div>
                </div>

         <div className="content-tabs">
                <div className= {toggleState=== 1 ? "content active-content"  : "content"}  >
                <h>MOD09GQ.061</h>
                <hr />
                    <p>
                    The MOD09GQ Version 6.1 продукт предоставляет оценку спектральной отражательной 
                    способности поверхности спектрорадиометра Terra Moderate Resolution Imaging (MODIS)
                     в диапазонах 250 метров (м) 1 и 2, скорректированную на атмосферные условия, такие как газы,
                      аэрозоли и рэлеевское рассеяние.
                     </p> 
                     <br/> <br/>
                    <PremYyCalendar  />

                 
                
         </div>

        <div className= {toggleState=== 2 ? "content active-content"  : "content"} >
                    <h2>MODIS</h2>
                    <hr />
                    <p>
                    + The Fire Information for Resource Management System (FIRMS) Система позволяет получать оперативную информацию о местоположении пожаров (hotspots), 
                    как центров пикселей 1х1 км на основе автоматического регистрирования высокого отражения 
                    в тепловых каналах спектра солнечного излучения  снимков с камеры MODIS (Moderate Resolution Imaging Spectroradiometer),
                     установленной на спутниках  Terra и Aqua. Для мониторинга используется стандартный продукт MODIS Land MOD14/MYD14
                    (Fire and Thermal Anomalies).
                    </p>
                    <br/> <br/>
                    <PremYyMODISCalendar/> 


                    </div>

                    <div className= {toggleState=== 3 ? "content active-content"  : "content"}  >
                <h> NOAA</h>
                <hr />
                    <p>
                      NOAA – это аббревиатура от Национальной управления
                     океанических и атмосферных исследований США (National Oceanic and Atmospheric Administration).
                      Это агентство было создано, чтобы изучать состояние окружающей среды планеты.
                    </p>  
                    <br/> <br/> 
                <PremYyNOAACalendar/>
         </div>
            </div>
       </div>
       </>
  );
}

export default Tabs_met;