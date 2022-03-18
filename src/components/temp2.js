isValid = () => {
    const {errors} = this.state;

    if(!this.checkPersonDate()){
        this.setState({
            errors: {...errors, firstName:true,lastName:true}
        })
        return false
    }
    if (!this.checkEmail()){
        this.setState({
            errors: {...errors, email:true}
        })
        return false
    }
    if(!this.checkDay()){
        this.setState({
            errors: {...errors, date:true}
        })
        return false
    }
    if(!this.checkHour()){
        this.setState({
            errors: {...errors, time:true}
        })
        return false
    }
    return true
}

checkPersonDate = () => {
    const{firstName,lastName,errors} = this.state;
    const regExp = /^[a-zA-Z]{2,30}/;
    if(firstName.match(regExp) || lastName.match(regExp)) {
        // this.cleanErrors(firstName) // nie działa ta metoda, nie ustawia firstName na true, ponizej zakomentowana
        this.setState({
            errors: {...errors, firstName:false,lastName:false}
        })
        return true
    }
    return false
}

checkEmail = () => {
    const{email,errors} = this.state;
    const regExp = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
    if(email.match(regExp)){
        this.setState({
            errors: {...errors, email:false}
        })
        return true
    }
    return false
}

checkDay = () => {
    const{date,errors} = this.state;
    const regExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    if(date.match(regExp)){
        this.setState({
            errors: {...errors, date:false}
        })
        return true
    }
    return false

}

checkHour = () =>{
    const{time,errors} = this.state;
    const regExp = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;
    if(time.match(regExp)){
        this.setState({
            errors: {...errors, time:false}
        })
        return true
    }
    return false
}
