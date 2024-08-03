import React from 'react';
import Calendar from 'react-calendar';



const Calendar1 = ({getvalue}) =>{

    const [value, onChange] =React.useState(new Date());
    getvalue(value);
    
    return (
      <div className='my_calender1'>
        <Calendar onChange={onChange} value={value} />
        {value.toString()}
        </div>
    );
};
export default Calendar1;