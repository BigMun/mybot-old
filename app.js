const quickcord = require("quickcord")
const dotenv = require('dotenv').config();

const command = new quickcord.Client(process.env.TOKEN, '!');

command.on('loaded', console.log);

command.on('molest', require('./commands/molest'));
command.on('pm', require('./commands/pm'));
command.on('purge', require('./commands/purge'));

/**
 * emit('test', 'lol')
 * on('test', message)
 */

Array.from(command.eventNames()).map(event => console.log(`Loaded ${event} command`))