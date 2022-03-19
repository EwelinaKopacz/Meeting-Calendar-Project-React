
export default class CalendarProvider {
    constructor (){
        this.apiUrl = 'http://localhost:3006/meetings'
    }

    loadData(){
        const promise = fetch(this.apiUrl)
            .then(response => {
                if(response.ok) {
                     return response.json();
                }
                return Promise.reject(response);
            })
            .catch(error => console.error(error));
        return promise;
    }

    addData(data){
        const requestOptions = {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
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