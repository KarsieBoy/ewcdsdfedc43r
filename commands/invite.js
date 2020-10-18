var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

  const embed = new Discord.MessageEmbed()
.setTitle("Invite link:")
.setColor('#b30000')
.setThumbnail("https://cdn.discordapp.com/avatars/741599608056184834/60aaa4a08fc49b080a53accf25ff3058.webp?size=128")
.addField('https://discord.gg/aNn3QHN/', 'Deze link is voor altijd geldig!', true)

  msg.channel.send(embed);

}