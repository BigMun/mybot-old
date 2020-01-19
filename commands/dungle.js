const Quickcord = require('quickcord');

module.exports = {
    name: ['dungle', 'bungle'],
    call: (res, args) => {

        const member = res.mentions.members.first()
        
            res.delete(500);
        
            const embed = Quickcord.Embed({
                title: `${member.user.tag} is being dungled`,
                description: 'Dutty bomba',
                color: '#bf2ac7'
            });
        
        
            res.channel.send(embed)
    }
};