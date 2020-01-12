const Quickcord = require("quickcord")
module.exports = {
    name: "help",
    call: (res, args) => {

        const embed = new Quickcord.Embed({
            title:'help',
            description:'here you go sweetheart',
            color:'#ff1100',
            fields:[
                { name: '!keelan', value: 'shows a message right from big keelan', inline: false},
                { name: '!message <message>', value: 'sends a message in the channel', inline: false},
                { name: '!molest <tag>', value: 'try it!', inline: false},
                { name: '!ping', value: 'pong!', inline: false},
                { name: '!pm <tag> <message>', value: 'DMs a member', inline: false},
                { name: '!purge <amount>', value: 'deletes messages', inline: false}
             ]
        })



        res.channel.send(embed)

    }
}