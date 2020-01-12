module.exports = {
    name: "keelan",
    call: (res, args) => {
        res.delete()
        
        res.channel.send('This is Keelan, He voted Brexit, Be like Keelan.')
    }
};