import "./sty.css";

import kol1 from "./../img/projects/k.svg";
import ter1 from "./../img/projects/ter3.svg";
import ch1 from "./../img/projects/ch1.svg"; 
import ch_ym1 from "./../img/projects/ch_ym.svg"; 

import React, { useState } from 'react';
import {Stat} from "../helpers/statList";



function Statistics() {
    
    const [value, setValue] = useState('');
    const options = Stat.map((Stat) => {
        return <option  value={Stat.id} kol={Stat.kol} ter={Stat.ter} ch={Stat.ch} ch_ym={Stat.ch_ym} id={Stat.id} >{Stat.id}</option>;
     });
    
     
    return( 
<main className="box">
        <div className="container">
                <h1 className="title-1">Статистика</h1>
                <h1 className="title-2">Данные по лесным пожарам в Якутии </h1>

 

       <div className="containerr">
       
       <select value={value}  autocomplete="off" required  onChange={e=>setValue(e.target.value) }>
        {options}
        
      </select>   <br/>        <br/>   


         <div className="stat">
                <div>
                    <img src= {kol1} alt=" "  className="stat_logo "/>
                    <p className="number"  > { value === '2002 год' && '1790'}
                                             { value === '2003 год' && '2315'}
                                             { value === '2004 год' && '1176'}
                                             { value === '2005 год' && '1928'}
                                             { value === '2006 год' && '2279'}
                                             { value === '2007 год' && '2253'}
                                             { value === '2008 год' && '1719'}
                                             { value === '2009 год' && '1859'}
                                             { value === '2010 год' && '1467'}
                                             { value === '2011 год' && '2315'}
                                             { value === '2012 год' && '1653'}
                                             { value === '2013 год' && '2276'}
                                             { value === '2014 год' && '1882'}
                                             { value === '2015 год' && '1939'}
                                             { value === '2016 год' && '2153'}
                                             { value === '2017 год' && '1748'}
                                             { value === '2018 год' && '2096'}
                                             { value === '2019 год' && '2096'}
                                             { value === '2020 год' && '2227'}
                                             { value === '2021 год' && '2326'}
          </p>
                    <p className= "TT" >Количество пожаров</p>   
                </div>
                    
                <div>
                    <img src= {ter1} alt=" "  className="stat_logo "/>
                    <p className="number">  { value === '2002 год' && '94 000'}
                                             { value === '2003 год' && '78 561'}
                                             { value === '2004 год' && '81 269'}
                                             { value === '2005 год' && '44 821'}
                                             { value === '2006 год' && '63 295'}
                                             { value === '2007 год' && '54 512'}
                                             { value === '2008 год' && '57 778'}
                                             { value === '2009 год' && '59 916'}
                                             { value === '2010 год' && '55 692'}
                                             { value === '2011 год' && '66 062'}
                                             { value === '2012 год' && '44 602'}
                                             { value === '2013 год' && '74 829'}
                                             { value === '2014 год' && '54 257'}
                                             { value === '2015 год' && '48 870'}
                                             { value === '2016 год' && '82 503'}
                                             { value === '2017 год' && '47 876'}
                                             { value === '2018 год' && '65 805'}
                                             { value === '2019 год' && '48 707'}
                                             { value === '2020 год' && '43 465'}
                                             { value === '2021 год' && '42 000'}
                                             </p>
                    <p className= "TT" >Выжженная территория (га) </p>   
                    </div>

                <div>
                    <img src= {ch1} alt=" " className="stat_logo "/>
                    <p className="number"> { value === '2002 год' && '4345'}
                                             { value === '2003 год' && '4887'}
                                             { value === '2004 год' && '5897'}
                                             { value === '2005 год' && '5512'}
                                             { value === '2006 год' && '5311'}
                                             { value === '2007 год' && '4767'}
                                             { value === '2008 год' && '5852'}
                                             { value === '2009 год' && '5700'}
                                             { value === '2010 год' && '4704'}
                                             { value === '2011 год' && '4364'}
                                             { value === '2012 год' && '6064'}
                                             { value === '2013 год' && '4257'}
                                             { value === '2014 год' && '4913'}
                                             { value === '2015 год' && '4349'}
                                             { value === '2016 год' && '5689'}
                                             { value === '2017 год' && '3982'}
                                             { value === '2018 год' && '5144'}
                                             { value === '2019 год' && '5326'}
                                             { value === '2020 год' && '6753'}
                                             { value === '2021 год' && '4200'}
                     </p>
                    <p className= "TT">Человек задействовано</p>   
                    </div>
                
                <div>
                    <img src= {ch_ym1} alt=" "  className="stat_logo"/>
                    <p className="number" > { value === '2002 год' && '856'}
                                             { value === '2003 год' && '457'}
                                             { value === '2004 год' && '673'}
                                             { value === '2005 год' && '295'}
                                             { value === '2006 год' && '350'}
                                             { value === '2007 год' && '344'}
                                             { value === '2008 год' && '591'}
                                             { value === '2009 год' && '464'}
                                             { value === '2010 год' && '255'}
                                             { value === '2011 год' && '468'}
                                             { value === '2012 год' && '355'}
                                             { value === '2013 год' && '572'}
                                             { value === '2014 год' && '472'}
                                             { value === '2015 год' && '346'}
                                             { value === '2016 год' && '776'}
                                             { value === '2017 год' && '123'}
                                             { value === '2018 год' && '256'}
                                             { value === '2019 год' && '98'}
                                             { value === '2020 год' && '167'}
                                             { value === '2021 год' && '89'} </p>
                    <p className= "TT" >Человек погибло</p>   
                </div>     
          </div>
          <br/><br/> 
          <p className="ee">* Источник: https://14.mchs.gov.ru/ </p>
          
      </div>  
         
       </div> 
    </main>

    );
    

}
export default Statistics;