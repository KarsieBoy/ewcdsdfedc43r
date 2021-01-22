var Discord = require('discord.js');

exports.run = async(client, msg, args, guild) => {

    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return;
    const member = msg.mentions.members.first();
        let verify = msg.guild.roles.cache.find(role => role.id == "781595378109644900");
        member.roles.add(verify)
        msg.react('✅');

        client.channels.cache.get('793211252679770132').send(`Welkom op de server ${member}`);

}