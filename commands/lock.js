var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return;

    await msg.channel.overwritePermissions([

        {
            id: msg.guild.roles.cache.find(r => r.name == "🔱 • Spelers").id,
            deny: ['SEND_MESSAGES']
        }

    ]);

    msg.delete();

}