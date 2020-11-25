var Discord = require('discord.js');

exports.run = async(client, msg, args) => {


    function doMagic8BallVoodoo() {
        var rand = ['**Ja 100%**', '**Nee!**', '**Misschien..**', '**waarschijnlijk**', '**Ik denk van niet**', '**NOOIT!!**', '**Je kan het proberen..**', '**Jij kiest!**'];
    
        return rand[Math.floor(Math.random()*rand.length)];
    }
    
    {
        msg.channel.send(':8ball: Antwoord: ' + doMagic8BallVoodoo());
    }
}