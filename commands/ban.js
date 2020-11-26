var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return;

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

    var channel = guild.channels.cache.get('728299827523485797');
    var log = new Discord.MessageEmbed()
    .setTitle('Gebruiker verbannen')
    .setColor('#b30000')
    .setThumbnail("https://cdn.discordapp.com/avatars/741599608056184834/60aaa4a08fc49b080a53accf25ff3058.webp?size=128")
    .addField('User:', user, true)
    .addField('Door:', msg.author, true)
    .addField('Reden:', reason)
    msg.channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setThumbnail("https://cdn.discordapp.com/avatars/741599608056184834/60aaa4a08fc49b080a53accf25ff3058.webp?size=128")
    .setColor('#b30000')
    .setAuthor('Je bent verbannen van de Steakland discord-serverㅤㅤㅤ')
    .addFields({ name: "Door:", value: msg.author.username, inline: true })
    .addFields({ name: "Reden:", value: reason, inline: true })
    .addFields({ name: "Tijd:", value: "Permanent", inline: true })
    .addFields({ name: '\u200B', value: '\u200B' })
    .addFields({ name: "Start Datum:", value: `${currentDateAndTime=new Date().toLocaleString()}`, inline: true })
    .addFields({ name: "Eind Datum:", value: "Nooit", inline: true })

    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    let banReason = args.join(" ").slice(22);
if (!banReason) {
  banReason = "None"
}

User.ban({reason: banReason})

    msg.delete();

}