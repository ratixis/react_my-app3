
import React from 'react';
import { Button } from 'primereact/button';
import { Calendar } from "primereact/calendar";


import 'primereact/resources/themes/lara-light-indigo/theme.css';
import "primereact/resources/primereact.min.css";  


function PremCalendar (){

  let minDate = new Date(2002, 0, 1);
  let maxDate = new Date(2021, 11, 31);

 

    return(
      <div >
          <div >
          
              
                        
                            
                       <Calendar showIcon 
                      minDate={minDate} 
                      maxDate={maxDate}
                      readOnlyInput 
                      dateFormat="dd/mm/yy"
                        />
                           
                        
                  
                
                <Button label="Submit" type="submit" icon="pi pi-check" />
          </div>
      </div>
    );
}
export default PremCalendar;