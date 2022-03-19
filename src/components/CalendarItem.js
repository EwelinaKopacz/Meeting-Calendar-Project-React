import React from 'react';
import './Calendar.css';

const CalendarItem = props =>{
    const {firstName,lastName, date,time} = props.meeting;
    return (
        <div className='meeting__box'>
            <p>Spotkanie z: <strong> {firstName} {lastName}</strong></p>
            <p>Dnia: {date}</p>
            <p>O godzinie: {time}</p>
        </div>
    )
}

export default CalendarItem