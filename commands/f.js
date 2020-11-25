var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

    const embed = new Discord.MessageEmbed()
.setColor('#b30000')
.setThumbnail("https://cdn.discordapp.com/avatars/741599608056184834/60aaa4a08fc49b080a53accf25ff3058.webp?size=128")
.addFields(
  { name: 'Welkom', value: 'Welkom op de SteakLand Discord server. Lees de regels goed door om verwaring te voorkomen. Veel plezier!', inline: true },
  { name: 'Regels', value: '- Geen toxix gedraag in de chat en call.\n- Geen zelfpromotie, ook niet in dm.\n- En wees gwn lief voor elkaar.', inline: false },
  { name: 'Links', value: 'Website: https://steakland.nl/\nSollicitatie: https://steakland.nl/apply', inline: false },
  )

msg.channel.send(embed);

}