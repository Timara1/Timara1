//Count per letter
function updateValue() {
    cnt.innerText = input.value.length;

}
let input = document.querySelector('input');
let cnt = document.getElementById('cnt');
input.oninput = updateValue;



function countWord(){
    
    //Count Per word
    let words = document.getElementById('word').value;
    
    let countNum = 0;
    
    //Split words on each space
    let split = words.split(' '); 
    
    //loop through words and increase count
    //Check if splited word is not empty
    for(let i = 0; i < split.length; i++) {
        if (split[i] != "") {
            countNum +=1;
        }
    }
    
    //Display output
    document.getElementById('display').innerHTML = countNum;
}


