const quickcord = require('quickcord');

module.exports = {
    name: "dungled",
    call: (res, args) => {
        const member = res.mentions.members.first()
    
        res.delete(500);
    
        const embedi = new quickcord.Embed({
            title: `${member.user.tag} is being dungled
            `,
            description: 'Dutty bomba',
            color: '#bf2ac7'
        });
    
    
        res.channel.send(embedi)
    }
};