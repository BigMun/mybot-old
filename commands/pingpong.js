module.exports = {
        name: "ping",
        call: (res, args) => {
            res.channel.send("Pong!");
        }
    };