var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

  const embed = new Discord.MessageEmbed()
.setTitle("Commands")
.setColor('#b30000')
.setThumbnail(msg.guild.iconURL())
.addFields(
  { name: ':map: Algemene commands:', value: '`!help` `!ping` `!serverinfo` `!avatar` `!invite`', inline: false },
  { name: ':ok_hand: Fun commands:', value: '`!8ball` `!dobbel` `!rps` `!kopofmunt`', inline: false },
  { name: ':no_entry: Staff commands:', value: '`!ban` `!mute` `!unmute` `!purge` `!lock` `!unlock`', inline: false },
)
.setFooter('Dit bericht is niet meer correct!');

  msg.channel.send(embed);

}