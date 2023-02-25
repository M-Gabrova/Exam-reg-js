function solve1 (input){
    let paintCount = Number(input[0]);
    let rollsCount = input[1];
    let pricePerGloves = input[2];
    let pricePerBrush = input[3];

    let sumPaint = 21.5 * paintCount;
    let sumRolls = 5.2 * rollsCount;
    let glovesNeeded = Math.ceil(rollsCount*0.35);
    let brushesNeeded = Math.floor(paintCount*0.48);
    let sumGloves = glovesNeeded*pricePerGloves;
    let sumBrushes = pricePerBrush*brushesNeeded;

    let sumAll = sumBrushes+sumGloves+sumPaint+sumRolls;
    let delivery = sumAll*(1/15);

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);



}
solve1 (["10", "8", "2.2", "5"])