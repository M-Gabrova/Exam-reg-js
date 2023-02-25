function solve4 (input){
    let Nnn = Number(input[0]);
    let Mmm = Number(input[1]);
    let S = Number(input[2]);
    let buff = '';
    let sum = 0;

    for (let index = Mmm; index >= Nnn; index--) {
        if (index % 2 == 0 && index % 3 == 0) {
           if(index === S){
           break;
        }
        sum += index;
        buff += index + " ";
    }
    
}
console.log(buff);
}





solve4 (["20",
"1000",
"36"])


