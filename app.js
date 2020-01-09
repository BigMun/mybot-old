const quickcord = require("quickcord")

const command = new quickcord.Client('NjYzODc0NjY0NTg1NjI1NjAw.XhZ-Cw.mN4ENFsyVI_FSSD77dxuT3ozgt0', '!');

command.on('loaded', console.log);

command.on('molest', require('./commands/molest'));
command.on('pm', require('./commands/pm'));
command.on('purge', require('./commands/purge'));

/**
 * emit('test', 'lol')
 * on('test', message)
 */

Array.from(command.eventNames()).map(event => console.log(`Loaded ${event} command`))