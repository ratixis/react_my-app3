
import React from 'react';
import { Button } from 'primereact/button';
import { Calendar } from "primereact/calendar";
import { useState } from "react";


import 'primereact/resources/themes/lara-light-indigo/theme.css';
import "primereact/resources/primereact.min.css";  


function PremYCalendar (){

    let minDate = new Date(2002, 0, 1);
    let maxDate = new Date(2021, 11, 31);
  
 const [date, setDate] = useState(null);

    return(
      <div >
          <div >
          
        
                       <Calendar showIcon 
                      minDate={minDate} 
                      maxDate={maxDate}
                      readOnlyInput
                      value={date} 
                      onChange={(e) => setDate(e.value)} view="year"
                      dateFormat="yy"

                        />

                
                <Button label="Submit" type="submit" icon="pi pi-check" />
          </div>
      </div>
    );
}
export default PremYCalendar;