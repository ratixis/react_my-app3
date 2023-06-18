import React from 'react';
import { Button } from 'primereact/button';
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import axios from 'axios';

import './theme.css';
import "primereact/resources/primereact.min.css";  


function PremYyCalendar (){

    let minDate = new Date(2002, 0, 1);
    let maxDate = new Date(2021, 11, 31);
    
    const [date, setDate] = useState(null);
    
    async function component (e)  {
    
    
        e.preventDefault();
        var  date = e.target.elements.date.value;
        
        try {
          var response = await axios.get(`http://localhost:5166/api/contents/meteo/${date}/MODO9GQ_061`,
         { responseType: 'blob',
           onDownloadProgress : function(progressEvent) {
            if (progressEvent.event.lengthComputable){
              console.log(((progressEvent.loaded / progressEvent.total)* 100).toFixed()+"%");
            } else {
              console.log("Download in progress, please wait...");
            }
           }
        })
          .then((obj) => {
            console.log(response)
           const url = URL.createObjectURL(obj.data);
           const a = document.createElement('a');
           a.href =url;
           a.download = `meteo/${date}/MODO9GQ_061`
           a.style.display = 'none';
           document.body.appendChild(a);
           a.click();
           a.remove();
           URL.revokeObjectURL(url);
  
          })
        }
        catch(exception) {
          console.log('Request error');
        }
    }
  
  
    return(
      <form onSubmit={component} className='boxx'>
          <div className='cent'  >
          
        
                       <Calendar showIcon 
                      minDate={minDate} 
                      maxDate={maxDate}
                      readOnlyInput
                      name='date' 
                      onChange={(e) => setDate(e.value)} view="year"
                      dateFormat="yy"

                        />
          
                <Button  label="Найти" type="submit" icon="pi pi-check" />
          </div>
         

      </form>
    );
}
export default PremYyCalendar ;