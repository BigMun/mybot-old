const quickcord = require("quickcord")
const dotenv = require('dotenv').config();

const command = new quickcord.Client(process.env.TOKEN, ['!', 'x']);

command.loadCommands('./commands', files => {
    files.map(file => console.log(`${file.name} Loaded`));
});
