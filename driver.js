const shifter = require('./shifter');
const data = require('./data');
 
let wins = 0;
let loss = 0;
let ties = 0;

console.log(`
The Milwaukee Brewers Pythagorean Win-Loss for the 2019 season put them at 81-81. However, this perfectly average team finished the season 89-73, and made the playoffs. Did they have a lot of lucky wins? Or do the numbers not tell the whole story?

Use the score shifter to predict possible records.

  *Use positive numbers to compare runs scored to runs allowed in following games, and negative numbers to compare to games prior.*  

`);

shifter(data.rs, data.ra, results =>{
    results.map(outcome => {
        if(outcome > 0){
            wins++;
        }
        else if(outcome < 0){
            loss++;
        }
        else{
            ties++;
        }

    })

    console.log(`
++----------------------------------------------------------------++

    Actual Season Record:
            
        wins: 89 
        losses: 73
        Winning Percentage: 0.549

    With entered shift, season record stats would be:
            
        wins: ${wins}
        losses: ${loss}
        ties: ${ties}

    Assuming .500 record for extra inning games:

        wins: ${wins+(ties/2)} 
        losses: ${loss+(ties/2)}
        Winning Percentage: ${((wins + (ties / 2)) / (wins+loss+ties)).toFixed(3)}
++----------------------------------------------------------------++
    `);
    process.exit();
});