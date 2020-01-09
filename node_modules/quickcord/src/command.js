'use strict';

const EventEmitter = require('events');
const Discord = require('discord.js');

class CommandHandler extends EventEmitter {
    constructor(token, prefix = '.') {
        super();

        this._client = new Discord.Client();
        this._client.login(token)
        .then(result => {
            this.emit('loaded', 'Connection to Discord API established');
        })
        .catch(err => {
            throw err;
        });

        this._client.on('message', response => {
            const { content } = response;

            if(!content.startsWith(prefix) || response.author.bot) return;

            const args = response.content.slice(prefix.length).split(' ');
            const command = args.shift().toLowerCase();

            this.emit(command, response, args);
        });
    }

    _extract() {

    }
}

module.exports = CommandHandler;