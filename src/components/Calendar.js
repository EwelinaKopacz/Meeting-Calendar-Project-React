import React from 'react';
import './Calendar.css';
import CalendarList from './CalendarList';
import CalendarItem from './CalendarItem';
import CalendarForm from './CalendarForm';
import CalendarProvider from './CalendarProvider';

const apiCalendar = new CalendarProvider();

export default class Calendar extends React.Component {
    state = {
        meetings:[],
    }

    componentDidMount(){
        apiCalendar.loadData()
            .then(data => this.setState({meetings:data}))
            .catch(error => console.error(error))
    }

    sendDataToAPI = data =>{
        if(data){
            const {firstName,lastName,email,date,time} = data;
            const dataToSend = {firstName:firstName,lastName:lastName,email:email,date:date,time:time};
            apiCalendar.addData(dataToSend)
        }
    }

    addDataToState = data => {
        const {meetings} = this.state;
        this.setState({
            meetings: [...meetings,data]
        });
    }

    renderMeetingList = () =>{
        const {meetings} = this.state;
        return (
            meetings.map(item => {
                return <CalendarItem meeting={item} key={item.id}/>
            })
        )
    }

    render(){
        return(
            <>
                <section className='calendar__section'>
                    <CalendarList header={'Lista spotkań:'}>
                        {this.renderMeetingList()}
                    </CalendarList>
                    <CalendarForm header={'Dodaj nowe spotkanie:'} sendDataToState={this.addDataToState} sendDataToAPI={this.sendDataToAPI} />
                </section>
            </>
        )
    }
}





