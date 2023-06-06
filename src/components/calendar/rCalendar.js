import React, { useState } from 'react';
import './Calendar.css';
import Calendar from 'react-calendar';


function Rcalendar ({ date, setDate }){
    const [showCalendar, setShowCalendar] = useState(false);

    const onChange = date => {
        setDate(date);
        setShowCalendar(false);
  };
return(
    
<div>
      <input
        value={date}
        onFocus={() => setShowCalendar(true)}
      />
      <Calendar
        className={showCalendar ? " " : "hide"}
        value={date}
        maxDate={new Date(2021, 11, 31)} // will not allow date later 
        minDate={new Date(2002, 0, 1)} // will not allow date before 
        selectRange={true}
        onChange={onChange}

      />
    </div>

)
};
export default Rcalendar ;