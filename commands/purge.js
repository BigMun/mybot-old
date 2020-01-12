   // Refactored delete promise
    const deleteMessage = (message, interval = 0) => {
        message.delete(interval);
    }
module.exports = {
    name: "purge",
    call: (res, args) => {

        // Delete user's command
        res.delete();
    
        // Validate that 1 arguement is present
        if(args.length !== 1) {
            return res.reply("Please provide an amount")
            .then(message => deleteMessage(message, 2500));
        }
    
        // Check if is number
        if(isNaN(args[0])) {
            return res.reply("Parameter must be a number")
            .then(message => deleteMessage(message, 2500));
        }
    
        // Bulk delete
        res.channel.bulkDelete(args[0])
        .then(() => {
            res.reply(`Successfully raped ${args[0]} messages!`)
            .then(message => deleteMessage(message, 5000));
        })
        .catch(err => {
            res.reply("Could not delete messages older than 14 days")
            .then(message => deleteMessage(message, 2500));
        })
    }

};