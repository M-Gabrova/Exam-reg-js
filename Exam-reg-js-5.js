function solve5 (input){
    let index = 0;
    let gramsOfFoodBought = Number(input[index])*1000;
    index++;

    let gramsFoodReceived = 0;
    let command = 0;
    
    while ((command = input[index]) !== 'Adopted') {
       
        let currGrams = Number(input[index]);
        gramsFoodReceived += currGrams;
        index++;        
    }

    if (gramsFoodReceived <= gramsOfFoodBought) {
        console.log(`Food is enough! Leftovers: ${gramsOfFoodBought-gramsFoodReceived} grams.`);
    }
    else{
        console.log(`Food is not enough. You need ${gramsFoodReceived-gramsOfFoodBought} grams more.`);

    }
}
solve5 (["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])


