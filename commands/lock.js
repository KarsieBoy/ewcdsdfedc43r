var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return;

    await msg.channel.overwritePermissions([

        {
            id: msg.guild.roles.cache.find(r => r.name == "👪 • Member").id,
            deny: ['SEND_MESSAGES']
        }

    ]);

    const embed = new Discord.MessageEmbed()
    .setTitle(`Dit kanaal is gelockt door ${msg.author.username}!`)
    .setColor('#ff0000')
    msg.channel.send(embed);

}