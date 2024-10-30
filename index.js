// TODO: this file! :)
const state = {
    numberBank: [],
    Odds: [],
    Evens: [],
}
const sectionBank = document.querySelector('#numberBank');
const bankOutput = sectionBank.querySelector('output');
const sortOne = document.querySelector('#sortOne');
const form = document.querySelector('form');
const inputNum = document.querySelector('#number');
const sectionOdds = document.querySelector('#odds');
const oddsOutput = sectionOdds.querySelector('output');
const sectionEvens = document.querySelector('#evens');
const evensOutput = sectionEvens.querySelector('output');
const sortAll = document.querySelector('#sortAll');
 
function showState() {
    bankOutput.textContent = state.numberBank;
    oddsOutput.textContent = state.Odds;
    evensOutput.textContent = state.Evens;
}

form.addEventListener("submit", (event) => {

    event.preventDefault();

    if(!inputNum.value) {
        return;
    } else {
        state.numberBank.push(inputNum.value);
    
    }
    showState();

})

//Sorting code

sortOne.addEventListener('click' , (event) => {
    event.preventDefault();
    if(state.numberBank.length == 0) {
        return;
    }
        while (state.numberBank.length > 0) {
            const one = state.numberBank.shift();
            if (one % 2 == 0) {
                state.Evens.push(one)
            } else {
                state.Odds.push(one);
            }


        }

showState();
})
