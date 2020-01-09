module.exports = (message, args) => {
    const member = message.mentions.members.first()
    

    args.shift()
    
    const u_message = args.join(' ')



    member.send(u_message)
    .then(sent => {

        sent.delete(5000);

        message.channel.send('Message sent')
            .then(message => {
                message.delete(2500)
            })
    })
    .catch(() => {
        message.channel.send('Message failed')
            .then(message => {
                message.delete(2500)
            })
    });
    
    message.delete(500)
};