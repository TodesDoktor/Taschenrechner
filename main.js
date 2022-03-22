

function appendOperation(operation){
    document.getElementById('resultArea').innerHTML += operation;
}

function calcResult (){
    let container = document.getElementById('resultArea')
    let result = eval(container.innerHTML);
    container.innerHTML = result;
   //durch diese Funktion wird das Eingegebene zusammengerechnet
}

function deleteLast (){
    let container = document.getElementById('resultArea')
    container.innerHTML = container.innerHTML.slice(0 , -1);
//durch diese Funktion wird gewärleistet das der "Entf" Knopf funktioniert und immer das letzte was Eingetragen wurde entfernt
}