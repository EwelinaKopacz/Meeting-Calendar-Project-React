      //     if(targetName ==='firstName'){
    //         const firstName = e.target.value
    //         this.checkPersonDate(firstName,targetName)
    //     }

    //     if(targetName ==='lastName'){
    //         const lastName = e.target.value;
    //         this.checkPersonDate(lastName,targetName)
    //     }

    //     if(targetName ==='email'){
    //         const email = e.target.value;
    //         this.checkEmail(email,targetName)
    //     }

    //     if(targetName ==='date'){
    //         const date = e.target.value;
    //         this.checkDay(date,targetName)
    //     }

    //     if(targetName ==='time'){
    //         const hour = e.target.value;
    //         this.checkHour(hour,targetName)
    //     }
    // }



    // checkDay(value,targetName){
    //     const regExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    //     if(value.match(regExp)){
    //         this.addToLocalState(value,targetName)
    //     }
    //     return false
    // }

    // checkHour(value,targetName){
    //     const regExp = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;
    //     if(value.match(regExp)){
    //         this.addToLocalState(value,targetName)
    //     }
    //     return false
    // }

    // addToLocalState(value,targetName){
    //     this.setState({
    //         [targetName]:value
    //     });
    // }