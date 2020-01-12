const Quickcord = require("quickcord")
module.exports = {
    name: "help",
    call: (res, args) => {

        const embed = new Quickcord.Embed({
            title:'Help',
            description:'Here you go sweetheart',
            color:'#ff1100',
            fields:[
                { name: '!keelan', value: 'Hows a message right from big keelan', inline: false},
                { name: '!message <message>', value: 'Sends a message in the channel', inline: false},
                { name: '!dungle <tag>', value: 'Try it!', inline: false},
                { name: '!ping', value: 'pong!', inline: false},
                { name: '!pm <tag> <message>', value: 'DMs a member', inline: false},
                { name: '!purge <amount>', value: 'Deletes messages', inline: false}
             ]
        })

        res.channel.send(embed)

    }
}