const quickcord = require('quickcord');

module.exports = (res, args) => {
    const member = res.mentions.members.first()

    const embed = new quickcord.Embed({
        title: `${member.user.tag} is being molested`,
        description: 'Dutty bomba',
        color: '#bf2ac7'
    });


    res.channel.send(embed)
};