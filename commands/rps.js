var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

    if(!args[0]) return msg.channel.send("Gebruik: `Steen` `Papier` of `Schaar`!");

    var options = ["steen", "papier", "schaar"];

    var result = options[Math.floor(Math.random() * options.length)];

    if(args[0].toUpperCase() == "STEEN"){

        if(result == "papier") {
            return msg.channel.send(`:notepad_spiral: Ik heb **${result}**, Ik heb gewonnen!`);

        } else if(result == "schaar") {
            return msg.channel.send(`:scissors: Ik heb **${result}**, Jij heb gewonnen!`);

        } else if(result == "steen") {
            return msg.channel.send(`:moyai: Ik heb **${result}**, Het is gelijkspel!`);

        }

    }

    else if(args[0].toUpperCase() == "PAPIER"){

        if(result == "schaar") {
            return msg.channel.send(`:scissors: Ik heb **${result}**, Ik heb gewonnen!`);

        } else if(result == "steen") {
            return msg.channel.send(`:moyai: Ik heb **${result}**, Jij heb gewonnen!`);

        } else if(result == "papier") {
            return msg.channel.send(`:notepad_spiral: Ik heb **${result}**, Het is gelijkspel!`);

        }

    }
    else if(args[0].toUpperCase() == "SCHAAR"){

        if(result == "steen") {
            return msg.channel.send(`:moyai: Ik heb **${result}**, Ik heb gewonnen!`);

        } else if(result == "papier") {
            return msg.channel.send(`:notepad_spiral: Ik heb **${result}**, Jij heb gewonnen!`);

        } else if(result == "schaar") {
            return msg.channel.send(`:scissors: Ik heb **${result}**, Het is gelijkspel!`);

        }

    }
        
}

