"use strict";





let myRequest = new Request("loans.json");

fetch(myRequest)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        for (var i in data) {
            console.log(data[i].BorrowerFirstName)
            /*let data1 = new Individual(data[i].BorrowerFirstName, data[i].BorrowerLastName)*/
        }
        
    });



/*class   Individual {

    constructor(_firstName, _lastName) {
        this.BorrowerFirstName = _firstName;
        this.BorrowerLastName = _lastName;
    
    }
    
} */

