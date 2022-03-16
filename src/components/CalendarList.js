// Renderuje listę wszystkich aktualnych spotkań, wykorzystując dane przekazane przez props z Calendar.
// Pobiera dane od rodzica

import React from 'react';
import './Calendar.css';

export default class CalendarList extends React.Component {

    showList(){
        const {data} = this.props;
        return data.map(item => {
            return(                            // w dobrym miejscu mam wstawiony key={item.id} ??
                <div className='calendar__box' key={item.id}>
                    <p>Spotkanie z: <strong> {item.firstName} {item.lastName}</strong></p>
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