const readline = require('readline');

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


module.exports = (rs, ra, newOutcome) => {
        rl.question("How many games do you want to shift by? > ", s => {
            const results = [];
            const shiftedRS = [];
            const shift = parseInt(s, 10);
            
        for(i=0; i < rs.length-shift; i++){
            shiftedRS[i+shift] = rs[i]; 
        } 

        let j = 0;
        for(i=rs.length-shift; i < rs.length; i++){
            shiftedRS[j] = rs[i];
            j++; 
        }

        for(i=0; i < ra.length; i++){
            results.push(shiftedRS[i] - ra[i]);
        }
        
        newOutcome(results);
    });
}