var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

  const embed = new Discord.MessageEmbed()
.setTitle("Commands")
.setColor('#b30000')
.setThumbnail("https://cdn.discordapp.com/avatars/741599608056184834/60aaa4a08fc49b080a53accf25ff3058.webp?size=128")
.addFields(
  { name: ':map: Algemene commands:', value: '`!help` `!ping` `!serverinfo` `!avatar` `!invite`', inline: false },
  { name: ':ok_hand: Fun commands:', value: '`!8ball` `!dobbel` `!rps` `!kopofmunt`', inline: false },
//  { name: ':notes: Muziek commands:', value: '`!play` `!leave` `!loop` `!skip`', inline: false },
  { name: ':no_entry: Staff commands:', value: '`!ban` `!mute` `!purge` `!lock` `!unlock`', inline: false },
)

  msg.channel.send(embed);

}