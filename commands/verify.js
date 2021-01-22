var Discord = require('discord.js');

exports.run = async(client, msg, args, guild) => {

    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return;
    const member = msg.mentions.members.first();
        let verify = msg.guild.roles.cache.find(role => role.id == "781595378109644900");
        member.roles.add(verify)

}