var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

    var value = ["Kop", "Munt"];

    var result = value[Math.floor(Math.random() * value.length)];

    msg.channel.send(`:coin: Je hebt **${result}** gegooid!`);

}