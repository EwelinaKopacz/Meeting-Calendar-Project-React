// Renderuje formularz.
// Elementy formularza są kontrolowane przez state, więc komponent ten możemy nazwać kontrolowanym.
// Przed wysłaniem formularza, powinniśmy zweryfikować poprawność wprowadzonych danych (wykonać walidację)
// Wysyła dane do rodzica - w rodzicu tworzymy metody, ktore przekazemy przez props

import React from 'react';
import './Calendar.css';

export default class CalendarForm extends React.Component {

    state = {}

    renderForm(){
        return (
            <form className='form__container' onSubmit={this.submitHandler}>
                <label className='form__label'>Imię: <input name='firstName' value={this.state.firstName} className='form__input' onChange={this.inputHandler} /></label>

                <label className='form__label'>Nazwisko: <input name='lastName' value={this.state.lasttName} className='form__input' onChange={this.inputHandler} /></label>

                <label className='form__label'>Email: <input name='email' value={this.state.email} className='form__input' onChange={this.inputHandler} /></label>

                <label className='form__label'>Data: <input name='date' value={this.state.date} className='form__input' onChange={this.inputHandler} placeholder={'YYYY-MM-DD'}/></label>

                <label className='form__label'>Godzina: <input name='hour' value={this.state.hour} className='form__input' onChange={this.inputHandler} placeholder={'HH:MM'}/></label>
                <button className='form__button'>Dodaj</button>
            </form>
        )
    }

    inputHandler = e => {
        const targetName = e.target.name;

        if(targetName ==='firstName'){
            const firstName = e.target.value
            this.checkPersonDate(firstName,targetName)
        }

        if(targetName ==='lastName'){
            const lastName = e.target.value;
            this.checkPersonDate(lastName,targetName)
        }

        if(targetName ==='email'){
            const email = e.target.value;
            this.checkEmail(email,targetName)
        }

        if(targetName ==='date'){
            const date = e.target.value;
            this.checkDay(date,targetName)
        }

        if(targetName ==='hour'){
            const hour = e.target.value;
            this.checkHour(hour,targetName)
        }
    }

    addToLocalState(value,targetName){
        this.setState({
            [targetName]:value
        });
    }

    checkPersonDate(value,targetName){
        const regExp = /^[a-zA-Z]{2,30}/;
        if(value.match(regExp)){
            console.log('imie lub nazwisko poprawne');
            this.addToLocalState(value,targetName)
        }
        return false
    }

    checkEmail(value,targetName){
        const regExp = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
        if(value.match(regExp)){
            console.log('email poprawny');
            this.addToLocalState(value,targetName)
        }
        console.log('email zly');
        return false
    }

    checkDay(value,targetName){
        const regExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
        if(value.match(regExp)){
            console.log('data poprawna');
            this.addToLocalState(value,targetName)
        }
        console.log('data zla');
        return false
    }

    checkHour(value,targetName){
        const regExp = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;
        if(value.match(regExp)){
            console.log('godzina poprawna');
            this.addToLocalState(value,targetName)
        }
        console.log('godzina zla');
        return false
    }

    submitHandler = e =>{
        e.preventDefault();
    }

    render(){
        return(
            <>
                {this.renderForm()}
            </>
            )
        }
}