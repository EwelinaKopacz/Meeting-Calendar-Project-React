// Renderuje formularz.
// Elementy formularza są kontrolowane przez state, więc komponent ten możemy nazwać kontrolowanym.
// Przed wysłaniem formularza, powinniśmy zweryfikować poprawność wprowadzonych danych (wykonać walidację)
// Wysyła dane do rodzica - w rodzicu tworzymy metody, ktore przekazemy przez props

import React from 'react';
import './Calendar.css';

const initialState = {
    firstName:'',
        lastName:'',
        email:'',
        date:'',
        time:'',
        firstNameError:'',
        lastNameError:'',
        emailError:'',
        dateError:'',
        timeError:'',
}

export default class CalendarForm extends React.Component {

    state = initialState;

    renderForm(){
        console.log(this.state);
        return (
            <section className='form__section'>
                <h1 className='form__header'>Dodaj nowe spotkanie:</h1>
                <form className='form__container' onSubmit={this.submitHandler}>
                    <label className='form__label'>Imię: </label><input name='firstName' value={this.state.firstName} className='form__input' onChange={this.inputHandler} placeholder={'Jan'}/><span className='form__errors'>{this.state.firstNameError}</span>

                    <label className='form__label'>Nazwisko: </label><input name='lastName' value={this.state.lastName} className='form__input' onChange={this.inputHandler} placeholder={'Kowalski'}/><span className='form__errors'>{this.state.lastNameError}</span>

                    <label className='form__label'>Email: </label><input name='email' value={this.state.email} className='form__input' onChange={this.inputHandler} placeholder={'example@gmail.com'}/><span className='form__errors'>{this.state.emailError}</span>

                    <label className='form__label'>Data: </label><input name='date' value={this.state.date} className='form__input' onChange={this.inputHandler} placeholder={'YYYY-MM-DD'}/><span className='form__errors'>{this.state.dateError}</span>

                    <label className='form__label'>Godzina: </label><input name='time' value={this.state.time} className='form__input' onChange={this.inputHandler} placeholder={'HH:MM'}/><span className='form__errors'>{this.state.timeError}</span>
                    <button className='form__button'>Dodaj</button>
                </form>
            </section>
        )
    }

    inputHandler = e => {
        const targetName = e.target.name
        const targetValue = e.target.value
        this.setState({
            [targetName]:targetValue
        });
    }

    submitHandler = e => {
        e.preventDefault()
        const isValid = this.checkValid()
        if(isValid){
            const {sendData,sendToAPI} = this.props
            sendData(this.state)
            sendToAPI(this.state)
            this.cleanInputs();
            return alert('Spotkanie zostało dodane!')
        }
        return false
    }

    checkValid = () =>{
        let firstNameError = '';
        let lastNameError = '';
        let emailError = '';
        let dateError = '';
        let timeError = '';

        if(!this.checkFirstName()){
            firstNameError = 'Imię musi składać się min. z 2 znaków'
        }
        if(!this.checkLastName()){
            lastNameError = 'Nazwisko musi składać się min. z 2 znaków'
        }

        if(!this.checkEmail() || !this.state.email){
            emailError = 'Podaj poprawny adres E-mail'
        }

        if(!this.checkDay() || !this.state.date){
            dateError = 'Podaj poprawną datę RRRR-MM-DD'
        }

        if(!this.checkHour() || !this.state.date){
            timeError = 'Podaj poprawną godzinę HH:MM'
        }

        if(firstNameError || lastNameError || emailError || dateError || timeError){
            this.setState({firstNameError,lastNameError,emailError,dateError,timeError})
            return false
        }
        return true
    }

    checkFirstName = () => {
        const{firstName} = this.state;
        const regExp = /^[a-zA-Z]{2,30}/;
        if(firstName.match(regExp)) {
            return true
        }
        return false
    }

    checkLastName = () => {
        const{lastName} = this.state;
        const regExp = /^[a-zA-Z]{2,30}/;
        if(lastName.match(regExp)) {
            return true
        }
        return false
    }

    checkEmail = () => {
        const{email} = this.state;
        const regExp = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
        if(email.match(regExp)){
            return true
        }
        return false
    }

    checkDay = () => {
        const{date} = this.state;
        const regExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
        if(date.match(regExp)){
            return true
        }
        return false
    }

    checkHour = () =>{
        const{time} = this.state;
        const regExp = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;
        if(time.match(regExp)){
            return true
        }
        return false
    }

    cleanInputs = () => {
        this.setState(initialState)
    }

    render(){
        return(
            <>
                {this.renderForm()}
            </>
            )
        }
}