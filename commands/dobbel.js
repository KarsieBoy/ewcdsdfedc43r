var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

    var result = Math.ceil(Math.random() * 6);

    msg.channel.send(`:game_die: Je hebt **${result}** gegooid!`);

}