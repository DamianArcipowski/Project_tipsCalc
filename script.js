function splitMyBill(){

var button = document.getElementById("calculate");
var mainBox = document.getElementById("main");
var sumToPay = document.getElementById("sum");
var amountOfPerson = document.getElementById("people");
var result = document.getElementById("result");
var selectedEl = document.getElementById("selectedEl");


function checkTipIndex(){

    selectedOption = selectedEl.selectedIndex;
    return selectedOption;
};


selectedEl.addEventListener("change",function(){
    selectedEl[0].setAttribute("disabled","disabled");
});

button.addEventListener("click",function(){

    selectedEl.addEventListener("change",checkTipIndex);
    var tipIn = checkTipIndex();

    if(sumToPay.value == 0 || amountOfPerson.value == 0){
        
        result.style.color = "";
        mainBox.style.height = "550px";
        result.setAttribute("class","error");
        result.textContent = "Wypełnij poprawnie wszystkie pola!";
    
    } else {

        result.style.color = "rgb(32,32,32)";
        mainBox.style.height = "550px";


        var howMuch = sumToPay.value / amountOfPerson.value;

        switch(tipIn){
            case 1:
                howMuch += (howMuch*0.05);
                break;
            case 2:
                howMuch += (howMuch*0.1);
                break;
            case 3:
                howMuch += (howMuch*0.15);
                break;
            case 4:
                howMuch += (howMuch*0.2);
                break;
        }

        result.textContent = `Musicie się złożyć po: ${howMuch} zł`;
    }
});

};

splitMyBill();
