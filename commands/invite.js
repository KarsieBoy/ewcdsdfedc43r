var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

  const embed = new Discord.MessageEmbed()
.setTitle("Invite link:")
.setColor('#b30000')
.setThumbnail(msg.guild.iconURL())
.addField('https://discord.gg/aNn3QHN/', 'Deze link is voor altijd geldig!', true)

  msg.channel.send(embed);

}