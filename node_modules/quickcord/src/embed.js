'use strict';

const Discord = require('discord.js');
const Embed = new Discord.RichEmbed();

class QuickEmbed { 
    constructor(options = {}) {
        this.embed = Embed;

        this._generate(options);
    }

    _generate(options) {
        if(options.title) this._setTitle(options.title);
        if(options.description) this._setDescription(options.description);
        if(options.color) this._setColor(options.color);
        if(options.fields) this._insertFields(options.fields);

        return this.embed;
    }

    _setTitle(value) {
        this.embed.setTitle(value);
    }

    _setDescription(value) {
        this.embed.setDescription(value);
    }

    _setColor(value) {
        this.embed.setColor(value);
    }

    _insertFields(fields) {
        fields.map(field => {
            this.embed.addField(field.name, field.value, field.inline === undefined ? false : field.inline);
        })
    }

    get() {
        return this.embed;
    }
}

module.exports = QuickEmbed;