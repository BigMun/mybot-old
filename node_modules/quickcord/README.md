# About
Quickcord is a discord.js wrapper which allows you to easily and swiftly create commands for your discord bot without all of the setup normally required.

# Installation

`npm i quickcord --save`

# Getting Started

To get started, firstly require the Quickcord library and then you can create a new instance of the Quickcord client. Within the constructor, the first parameter is your bot token which you can find here: https://discordapp.com/developers/applications/ and the second parameter is your command prefix which is the character which you want to have infront of all of your commands, for example: `.help`.

```js
const Quickcord = require('quickcord');

const command = new Quickcord.Client('token', 'prefix');

command.on('loaded', console.log);

command.on('help', (res, args) => {
    const embed = new Quickcord.Embed({
        title: 'test',
        description: 'testing this',
        color: '#1AC588',
        fields: [
            { name: 'test', value: 'testing', inline: true }
        ]
    });

    res.reply(embed);
});
```

# Embeds
The original way of creating embeds within Discord.js is quite ugly so in Quickcord I have tidied this up by using an object as a parameter with all of the embed properties defined within.

Example:
```js
const Quickcord = require('quickcord');
const embed = new Quickcord.Embed({
    title: 'test',
    description: 'testing this',
        color: '#1AC588',
        fields: [
            { name: 'test', value: 'testing', inline: true }
        ]
});
```

We currently do not support all properties but they will be added soon.