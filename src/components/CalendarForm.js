// Renderuje formularz.
// Elementy formularza są kontrolowane przez state, więc komponent ten możemy nazwać kontrolowanym.
// Przed wysłaniem formularza, powinniśmy zweryfikować poprawność wprowadzonych danych (wykonać walidację)
// Wysyła dane do rodzica - w rodzicu tworzymy metody, ktore przekazemy przez props

import React from 'react';
import './Calendar.css';

export default class CalendarForm extends React.Component {

    renderForm(){
        return (
            <form className='form__container'>
                <label className='form__label'>Imię: <input className='form__input' /></label>

                <label className='form__label'>Nazwisko: <input className='form__input' /></label>

                <label className='form__label'>Email: <input className='form__input' /></label>

                <label className='form__label'>Data: <input className='form__input' /></label>

                <label className='form__label'>Godzina: <input className='form__input' /></label>
                <button className='form__button'>Dodaj</button>
            </form>
        )
    }

    render(){
        return(
            <>
                {this.renderForm()}
            </>
            )
        }
}