/* to clear input when click on Clr-button */
function clearResult(){
    document.getElementById("result").value="";
}

/* to delete the last element/number */
function deleteLast(){
    let result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

/* to calculate final result */

function calculateResult(){
    let result = document.getElementById("result");
    result.value = eval(result.value);
}

/* to append numbers from 0 to 9 in input string */

function appendInResult(val){
    let result = document.getElementById("result");
    result.value += val;
}

