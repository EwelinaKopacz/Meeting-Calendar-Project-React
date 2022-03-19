import React from 'react';
import './Calendar.css';

export default class CalendarList extends React.Component {
    render(){
        const {children,header}=this.props;
        return(
            <section className='meeting__section'>
                <h1 className='meeting__header'>{header}</h1>
                    <div className='meeting__list'>
                        {children}
                    </div>
            </section>
        )
    }
}


