// CEL KOMPONENTU
// Renderuje pozostałe komponenty oraz zawiera w state listę spotkań do wyświetlenia.
// To ten komponent posiada metody, które odpytują API w celu pobrania lub ustawienia danych.

import React from 'react';
import './Calendar.css';
import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';


export default class Calendar extends React.Component {
    constructor(props){
        super(props)
        this.apiUrl = ' http://localhost:3006/meetings'
    }
    state = {
        meetings:[],
    }

    async componentDidMount(){
        try {
            const response = await fetch(this.apiUrl);
            const meetings = await response.json();
            this.setState({meetings})
            console.log(meetings);
        }
        catch(error){
            console.error(error.message);
        }
    }

    sendToAPI = data =>{
        if(data){
            const {firstName,lastName,email,date,time} = data;
            const requestOptions = {
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({firstName:firstName,lastName:lastName,email:email,date:date,time:time})
            }

        fetch(this.apiUrl,requestOptions)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                throw new Error ('Problem with connection')
            })
            .then(response => console.log(response))
        }
    }

    addDataToState = data => {
        const {meetings} = this.state;
        this.setState({
            meetings: [...meetings,data]
        });
    }

    render(){
        return(
            <>
                <section className='calendar__section'>
                    <CalendarList data={this.state.meetings}/> 
                    <CalendarForm sendData={this.addDataToState} sendToAPI={this.sendToAPI}/>
                </section>
            </>
        )
    }
}





