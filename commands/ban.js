var Discord = require('discord.js');

exports.run = async(client, msg, args, guild) => {

let banned = msg.mentions.users.first() || client.users.resolve(args[0]);
let reason = args.slice(1).join(" ");


if (!banned) {
  let baninfoembed = new Discord.MessageEmbed()
    .setTitle("Geef aub een gebruiker op.")
    .setColor('#ff0000')
    msg.channel.send(baninfoembed);

  return;
}

if (msg.author === banned) {
  let sanctionyourselfembed = new Discord.MessageEmbed()
    .setTitle(`Je kan je zelf niet bannen.`)
    .setColor("#ff0000");
    msg.channel.send(sanctionyourselfembed);

  return;
}

if (!reason) {
  let noreasonembed = new Discord.MessageEmbed()
    .setTitle(`Geef aub een reden op.`)
    .setColor("#ff0000");
    msg.channel.send(noreasonembed);

  return;
}

if (!msg.member.permissions.has("BAN_MEMBERS")) {
  let nopermsembed = new Discord.MessageEmbed()
    .setTitle("Je kan geen staff bannen.")
    .setColor("#ff0000");
    msg.channel.send(nopermsembed);

  return;
}

if (!msg.guild.me.permissions.has("BAN_MEMBERS")) {
  let botnopermsembed = new Discord.MessageEmbed()
  .setTitle("Ik heb geen premissions om mensen te bannen.")
    .setColor("#ff0000");
    msg.channel.send(botnopermsembed);

  return;
}

let member = msg.guild.member(msg.mentions.users.first() || client.users.cache.get(args[0]) || msg.member);

const logembed = new Discord.MessageEmbed()
    .setTitle('Gebruiker verbannen')
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setColor('#ff0000')
    .addField('User:', banned, true)
    .addField('Door:', msg.author, true)
    .addField('Reden:', reason)
    client.channels.cache.get('728299827523485797').send(logembed);

var unbanembed = new Discord.MessageEmbed()
.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
.setColor('#ff0000')
.setAuthor('Je bent verbannen van SteakLand!')
.addFields({ name: 'Wil je een unban?', value: `Vraag via ${website} je unban aan.`, inline: true })
.addFields({ name: 'Reden:', value: reason, inline: true })

try {
    await banned.send(unbanembed);
} catch(err) {
}

msg.guild.members.ban(banned, { reason: reason });

let successfullyembed = new Discord.MessageEmbed()
.setTitle(`Ik heb succesvol ${banned.tag} verbannen`)
.setImage(`https://media1.tenor.com/images/d856e0e0055af0d726ed9e472a3e9737/tenor.gif?itemid=8540509`)
.setColor('#ff0000')

msg.channel.send(successfullyembed);

}