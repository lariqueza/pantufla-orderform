const { openDelimiter } = require("ejs");

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function toCheckOut() {
    if(validate() === false) {
        return;
    }
    if(validateRadio() === false) {                  //check if radio buttons are checked
        alert("you have to select a size");
        return;
    }
    if(validatePaymentMethod() === false) {             //check that the user has selected a payment method
        alert("you have to choose a payment method");
        return;
    }

    alert("your order has been sent");            //if everything is ok let the user know

    checkform();                                  //loops through the entire form to collect user-input

    return;
}

//check if the first 4 input boxes are filled out

function validate() {
    var fields = [document.getElementById('cust'), document.getElementById('adr'), document.getElementById('city'), document.getElementById('phone')];
    const error = 0;

    //loop through input fields to check if empty, if empty return false
    for(var i = 0; i < fields.length; i++) {
        if(fields[i].value === "") {
            fields[i].style.background = "red";
            err++;
        }
    }
    if(error === 0) {
        return true;
    } else {
        alert("please fill out all of the fields");
        return false;
    }
}

//radio button click check

function validateRadio() {
    if(document.SandalForm.sizes[0].checked) {
        return true;
    }
    if(document.SandalForm.sizes[1].checked) {
        return true;
    }
    if(document.SandalForm.sizes[2].checked) {
        return true;
    }
    if(document.SandalForm.sizes[3].checked) {
        return true;
    }
    if(document.SandalForm.sizes[4].checked) {
        return true;
    }
    return false;
}

//payment method click check

function validatePaymentMethod() {
    if(document.SandalForm.pay[0].checked) {
        return true;
    }
    if(document.SandalForm.pay[1].checked) {
        return true;
    }
    if(document.SandalForm.pay[2].checked) {
        return true;
    }

    return false;
}

//collect user input

function checkForm() {
    var el = document.SandalForm.elements.length;
    var txt = "";

    for(var i = 0; i < el.length; i++) {
        var type = SandalForm.elements[i].type;                        //check type of element
        if(type === "radio" && SandalForm.elements[i].checked) {
            txt = `${txt + SandalForm.elements[i].value}<br>`;
        }
        if(type === "text" && SandalForm.elements[i].value) {
            txt = `${txt + SandalForm.elements[i].value}<br>`;
        }
        if(type === "select-one") {
            var e = document.getElementById("sel");
            var strUser = e.options[e.selectedIndex].text;
            txt = `${txt}Amount: ${e.options[e.selectedIndex].text}<br>`;
        }
    }
        document.getElementById("1S1values").innerHTML = txt;
}
checkForm();

function myFunction() {
    location.href = "https://naughty-liskov-357686.netlify.app/"
}
myFunction();