
import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import axios from 'axios';
import { Calendar } from "primereact/calendar";


import 'primereact/resources/themes/lara-light-indigo/theme.css';
import "primereact/resources/primereact.min.css";  

function PremCalendar (){

  let minDate = new Date(2002, 0, 1);
  let maxDate = new Date(2021, 11, 31);

    
    const defaultValues = { date: null };
    const form = useForm({ defaultValues });
    



async function onSubmit (e)  {
      e.preventDefault();
      //var pa  = e.target.elements.field.value;
      try {
        var response = await axios.get(``);
        if (response.status === axios.HttpStatusCode.Ok) {
         // console.log(response);
        }
      }
      catch(exception) {
        console.log('Request error');
      }
    };

    

    return(
      <div >
          <div onSubmit={onSubmit} >
          
                <Controller
                    name="date"
                    control={form.control}
                    rules={{ required: 'Date is required.' }}
                    render={({ field }) => (
                        <>
                            
                       <Calendar showIcon 
                      minDate={minDate} 
                      maxDate={maxDate}
                      readOnlyInput 

                      inputId={field.name} 
                      value={field.value} 

                      onChange={field.onChange} 

                      dateFormat="dd/mm/yy"
                        />
                           
                        </>
                    )}
                />
                <Button label="Submit" type="submit" icon="pi pi-check" />
          </div>
      </div>
    );
}
export default PremCalendar;