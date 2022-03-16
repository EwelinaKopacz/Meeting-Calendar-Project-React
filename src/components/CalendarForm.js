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
                <label className='form__label'>Imię: <input name='fristName' value={this.state.firstName} className='form__input' onChange={this.inputHandler} /></label>

                <label className='form__label'>Nazwisko: <input name='lastName' value={this.state.lasttName} className='form__input' onChange={this.inputHandler} /></label>

                <label className='form__label'>Email: <input name='email' value={this.state.email} className='form__input' onChange={this.inputHandler} /></label>

                <label className='form__label'>Data: <input name='date' value={this.state.date} className='form__input' onChange={this.inputHandler} /></label>

                <label className='form__label'>Godzina: <input name='hour' value={this.state.hour} className='form__input' onChange={this.inputHandler} /></label>
                <button className='form__button'>Dodaj</button>
            </form>
        )
    }

    inputHandler = e => {
        const {name,value} = e.target;
        console.log(name,value);
        this.setState({
            [name]:value
        })
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