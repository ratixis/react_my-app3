
import React from 'react';
import { Button } from 'primereact/button';
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import axios from 'axios';

import './theme.css';
import "primereact/resources/primereact.min.css";  


function PremYCalendar (){

    let minDate = new Date(2002, 0, 1);
    let maxDate = new Date(2021, 11, 31);
    const [prod, setProd] = useState('');
   
   

    async function component (e)  {
    
    
      e.preventDefault();
      var  date = e.target.elements.date.value;
      var  prod = e.target.elements.prod.value;
      try {
        var response = await axios.get(`http://localhost:5166/api/contents/tvv/${date}/${prod}`,
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
         a.download = `tvv/${date}/${prod}`
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
                     view="year"
                      dateFormat="yy"

                        />
          <div className="containerr">
        <select   name='prod' required  onChange={e=>setProd(e.target.value) }> 
        {prod}
        <option value=" "> - </option>
        <option value="10-Day">10-Day</option>
        <option value="FireCCI51">FireCCI51</option>
        <option value="FIRMS">FIRMS</option>
        <option value="MCD64A1 GlobFire">MCD64A1 GlobFire</option>
        <option value="MCD64A1_006">MCD64A1_006</option>
        <option value="MOD14A1">MOD14A1</option>
        <option value="Month">Month</option>
        <option value="MYD14A1">MYD14A1</option>

        </select>
        </div>
                <Button  label="Скачать" type="submit" icon="pi pi-check" />
          </div>
          <div>
          <div>
           
          </div>
          </div>

      </form>
    );
}
export default PremYCalendar;