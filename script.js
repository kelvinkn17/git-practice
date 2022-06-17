// main compute
function compute(){
    var validation = principalValidation();

    if(validation === false){
        alert("Enter a positive number");
    }else{
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        // document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%.\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";

        document.getElementById("result").innerHTML= `If you deposit <span class="result-number">${principal}</span>,<br\>at an interest rate of <span class="result-number">${rate}%</span>.<br\>You will receive an amount of <span class="result-number">${interest}</span>,<br\>in the year <span class="result-number">${year}</span>`;
    }
}

// principal / amount validation
function principalValidation(){
    var principal = document.getElementById("principal").value;

    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }else{
        return true;
    }
}

// rate slider onchange
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = `${rateval}%`;
}