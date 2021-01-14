var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return;

    await msg.channel.overwritePermissions([

        {
            id: msg.guild.roles.cache.find(r => r.name == "👪 • Member").id,
            allow: ['SEND_MESSAGES']
        }

    ]);


    const embed = new Discord.MessageEmbed()
    .setTitle(`Dit kanaal is geopent door ${msg.author.username}!`)
    .setColor('#ff6600')
    msg.channel.send(embed);

}