// Renderuje formularz.
// Elementy formularza są kontrolowane przez state, więc komponent ten możemy nazwać kontrolowanym.
// Przed wysłaniem formularza, powinniśmy zweryfikować poprawność wprowadzonych danych (wykonać walidację)
// Wysyła dane do rodzica - w rodzicu tworzymy metody, ktore przekazemy przez props

import React from 'react';

export default class CalendarForm extends React.Component {
    render(){
        return(
            <h1>Hello CalendarForm</h1>
            )
        }
}