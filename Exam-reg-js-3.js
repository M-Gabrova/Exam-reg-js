function solve3 (input){
    let country = input[0];
    let typeSouvenir = input[1];
    let countSouvenirs = Number(input[2]);
    let sum = 0;

    if (typeSouvenir === "flags") {
        switch (country) {
            case 'Argentina':
                sum = countSouvenirs*3.25;
                break;
        
            case 'Brazil':
                sum = countSouvenirs*4.20;
                break;

            case 'Croatia':
                sum = countSouvenirs*2.75;
                break;
            
            case 'Denmark':
                sum = countSouvenirs*3.10;                
                break;
            default:
            console.log(`Invalid country!`);
            break;
        }
    }
    else if (typeSouvenir === "caps") {
        switch (country) {
            case 'Argentina':
                sum = countSouvenirs*7.20;
                break;
        
            case 'Brazil':
                sum = countSouvenirs*8.50;
                break;

            case 'Croatia':
                sum = countSouvenirs*6.90;
                break;
            
            case 'Denmark':
                sum = countSouvenirs*6.50;                
                break;
            default:
                console.log(`Invalid country!`);
                break;
        }
    }
    else if(typeSouvenir === "posters"){
        switch (country) {
            case 'Argentina':
                sum = countSouvenirs*5.10;
                break;
        
            case 'Brazil':
                sum = countSouvenirs*5.35;
                break;

            case 'Croatia':
                sum = countSouvenirs*4.95;
                break;
            
            case 'Denmark':
                sum = countSouvenirs*4.80;                
                break;
            default:
                console.log(`Invalid country!`);
                break;
        }
    }
    else if(typeSouvenir === "stickers"){
        switch (country) {
            case 'Argentina':
                sum = countSouvenirs*1.25;
                break;
        
            case 'Brazil':
                sum = countSouvenirs*1.20;
                break;

            case 'Croatia':
                sum = countSouvenirs*1.10;
                break;
            
            case 'Denmark':
                sum = countSouvenirs*0.90;                
                break;
            default:
                console.log(`Invalid country!`);
                break;
        }
    }
    else if(typeSouvenir !== 'flags' || typeSouvenir !== 'caps' || typeSouvenir !== 'posters' || typeSouvenir !== 'stickers'){
            console.log(`Invalid stock!`);
            }
    if((country === "Argentina" || country ==="Brazil" || country ==="Croatia" || country === "Denmark") 
    && (typeSouvenir === 'flags' || typeSouvenir === 'caps' || typeSouvenir === 'posters' || typeSouvenir === 'stickers')){  
            console.log(`Pepi bought ${countSouvenirs} ${typeSouvenir} of ${country} for ${sum.toFixed(2)} lv.`);

    }
}
solve3 (["Denmark",
"caps",
"8"])







