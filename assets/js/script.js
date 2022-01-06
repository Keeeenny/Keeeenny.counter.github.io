const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.addEventListener("mousedown", calculator);
minus.addEventListener("click", calculator);


function calculator(){

    let identifier = this.attributes["data-value"].value;
    let value = counter.innerHTML;
    
    let operators = {
        add: +1,
        sub: -1,
    }

    let result = parseInt(value)+operators[identifier];

    document.getElementById("counter").innerHTML = result

};


