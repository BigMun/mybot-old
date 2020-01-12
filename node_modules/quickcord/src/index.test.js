const Quickcord = require('./index');
const dotenv = require('dotenv').config();

console.log('Testing Initiated...');

const quickcord = new Quickcord.Client(process.env.BOT_TOKEN, '.');

console.log("Test 1 -> started");

quickcord.on('loaded', message => {
    if(message !== "Connection to Discord API established") {
        throw new Error("Loaded event is being emitted but does not return a valid response");
    }
});

const embed = new Quickcord.Embed({
    title: 'test',
    description: 'testing'
});

if(embed === undefined) {
    throw new Error("Embed could not be created");
}

console.log("Test 2 -> passed")

quickcord._client.destroy();

return;