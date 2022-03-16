// Renderuje listę wszystkich aktualnych spotkań, wykorzystując dane przekazane przez props z Calendar.
// Pobiera dane od rodzica

import React from 'react';
import './Calendar.css';

export default class CalendarList extends React.Component {

    showList(){
        const {data} = this.props;
        let meetingList = [];
        return meetingList = data.map(item => {
            return(
                <div className='calendar__box'>
                    <p>Spotkanie z: <strong>{item.firstName} {item.lastName}</strong></p>
                    <p>Dnia: {item.date}</p>
                    <p>O godzinie: {item.time}</p>
                </div>
            )
        })
    }

    render(){
        return(
            <div className='calendar__list'>
                {this.showList()}
            </div>
        )
    }
}