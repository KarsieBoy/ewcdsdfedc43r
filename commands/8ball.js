var Discord = require('discord.js');

exports.run = async(client, msg, args) => {


    function doMagic8BallVoodoo() {
        var rand = ['**Ja**', '**Nee**', '**Geen idee**'];
    
        return rand[Math.floor(Math.random()*rand.length)];
    }
    
    {
        msg.channel.send(':8ball: Antwoord: ' + doMagic8BallVoodoo());
    }
}