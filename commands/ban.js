var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Alleen staff kan dit doen.');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('Geef aub een gebruiker op.');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(member){
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Je kan geen staff bannen.');
    }

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('Geef aub een reden op.');

    var channel = msg.guild.channels.cache.find(c => c.name === 'discord-logs');

    var log = new Discord.MessageEmbed()
    .setTitle('Gebruiker verbannen')
    .setColor('#b30000')
    .setThumbnail("https://cdn.discordapp.com/avatars/741599608056184834/60aaa4a08fc49b080a53accf25ff3058.webp?size=128")
    .addField('User:', user, true)
    .addField('Door:', msg.author, true)
    .addField('Reden:', reason)
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setThumbnail("https://cdn.discordapp.com/avatars/741599608056184834/60aaa4a08fc49b080a53accf25ff3058.webp?size=128")
    .setColor('#b30000')
    .setTitle('Je bent voor altijd verbannen van Steakland :(')
	.setURL('https://steakland.nl/')
    .addFields({ name: "Reden:", value: reason, inline: true })
    .addFields({ name: "Door:", value: msg.author, inline: true })
    .addFields({ name: "Tijd:", value: "Permanent", inline: true })

    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    msg.guild.members.ban(user); 

    msg.channel.send(`**${user}** is verbannen door **${msg.author}**!`);
}