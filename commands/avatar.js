var Discord = require('discord.js');

exports.run = async(client, msg, args) => {


    let member = msg.mentions.users.first() || msg.author

    let avatar = member.displayAvatarURL({size: 128})


    const embed = new Discord.MessageEmbed()
    .setTitle(`${member.username}'s avatar`)
    .setImage(avatar)
    .setColor("b30000")

    msg.channel.send(embed);
}