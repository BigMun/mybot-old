'use strict';

const Discord = require('discord.js');
const CommandHandler = require('./command');

class Base extends CommandHandler {

    constructor(token, prefix) {
        super(token, prefix);
    }

}

module.exports = Base;