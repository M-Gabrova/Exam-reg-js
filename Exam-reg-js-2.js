function solve2 (input){
    let processorsPlanned = Number(input[0]);
    let employeesCount = Number(input[1]);
    let workingDays = Number(input[2]);

    let hourCapacity = employeesCount*workingDays*8;
    let processorsMadeCapacity = Math.floor(hourCapacity/3);

    if (processorsMadeCapacity < processorsPlanned) {
        let diff = (processorsPlanned-processorsMadeCapacity)*110.10;
        console.log(`Losses: -> ${diff.toFixed(2)} BGN`);
    }
    else{
        let diff = (processorsMadeCapacity-processorsPlanned)*110.10;
        console.log(`Profit: -> ${diff.toFixed(2)} BGN`);
    }


}
solve2 (["150", "7", "18"])