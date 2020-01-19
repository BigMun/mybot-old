const fetch = require('node-fetch');

module.exports = {
    name: ['donald', 'trump'],
    call: (res, args) => {  
        res.delete(500);
        
       fetch('https://tronalddump.io/random/quote')
        .then(async response => {
            if (response.ok) {
            
                const { value, name } = await response.json();
                
                res.channel.send(`${value} - **Donald Trump**`);
            }
        })
        
    .catch(console.error);
    }
};