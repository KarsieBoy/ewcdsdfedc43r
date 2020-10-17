var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if (!msg.member.hasPermission("BAN_MEMBERS")) return;
 
    if (!args[0]) return msg.reply("Geef een aub een getal op.");
 
    if (Number.isInteger(parseInt(args[0]))) {
 
        var aantal = parseInt(args[0]) + 1;
 
        msg.channel.bulkDelete(aantal).then(() => { 
 
            if (args[0] == 0) {
 
                (msg => msg.delete({timeout: 3000}));
            
            } else if (args[0] == 1) {
            
                (msg => msg.delete({timeout: 3000}));
            
            } else {
            
                (msg => msg.delete({timeout: 3000}));
            
            }
 
        });
 
    } else {
        return msg.reply("Geef aub een getal op.");
    }
}