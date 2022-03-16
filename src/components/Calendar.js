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

    render(){
        return(
            <>
                <section className='calendar__section'>
                    <header className='calendar__header'>Lista spotkań:</header>
                    <CalendarList data={this.state.meetings}/>
                </section>
                <section className='form__section'>
                    <header className='form__header'>Dodaj nowe spotkanie:</header>
                    <CalendarForm/>
                </section>
            </>
        )
    }
}





