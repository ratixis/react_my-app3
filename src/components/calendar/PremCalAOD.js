import React from 'react';
import { useState } from "react";
import { Button } from 'primereact/button';
import { Calendar } from "primereact/calendar";
import axios from 'axios';

import './theme.css';
import "primereact/resources/primereact.min.css";  

function PremCalAOD (){
  
    let minDate = new Date(2018, 4, 1);
    let maxDate = new Date(2021, 7, 31);
    const [date, setDate] = useState(null);
   
    async function component (e)  {
      
      
      e.preventDefault();
      var  month = e.target.elements.month.value;
      
      try {
        var response = await axios.get(`http://localhost:5166/api/contents/smoke/${month}/AOD`,
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
         a.download = `smoke/${month}/AII`
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
        <form onSubmit={component} >
            <div >
            
                
                          
                              
                         <Calendar showIcon 
                         minDate={minDate} 
                         maxDate={maxDate}
                         readOnlyInput
                         name='month'
                         onChange={(e) => setDate(e.value)} view="month"
                         dateFormat="m/yy"
                         
  
                        
                          />
                             
                          
                    
                  
                  <Button label="Найти" type="submit" icon="pi pi-check" />
            </div>
        </form>
      );
  }
  export default PremCalAOD;