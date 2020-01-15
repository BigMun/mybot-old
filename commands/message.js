module.exports = {
    name: "message",
    call: (res, args) => {
        res.delete()
    
        const message = args.join(' ')
    
        res.channel.send(message)
    }
};