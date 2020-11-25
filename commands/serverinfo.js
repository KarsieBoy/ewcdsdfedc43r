var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

  const embed = new Discord.MessageEmbed()
.setTitle("Server Info")
.setColor('#b30000')
.setThumbnail("https://cdn.discordapp.com/avatars/741599608056184834/60aaa4a08fc49b080a53accf25ff3058.webp?size=128")
.addFields({ name: "ID:", value: "709124624570646591", inline: false })
.addFields(
  { name: 'Eigenaar:', value: 'KarsieBoy#7238', inline: true },
  { name: 'Regio:', value: `${msg.guild.region}`, inline: true },
  { name: 'Bots:', value: '1', inline: true },
)
.addFields(
  { name: 'Leden:', value: `${msg.guild.memberCount}`, inline: true },
  { name: 'Online:', value: `${msg.guild.members.filter(member => member.presence.status !== "offline").size}`, inline: true },
  { name: 'Boosts:', value: `${msg.guild.premiumSubscriptionCount}`, inline: true },
)
.addFields(
  { name: 'Tekstkanalen', value: '9', inline: true },
  { name: 'Spraakkanalen', value: '5', inline: true },
)
.addFields(
  { name: 'Gemaakt op:', value: `${msg.member.guild.createdAt.toLocaleString()}`, inline: false },
  { name: 'Gejoined op:', value: `${msg.member.joinedAt.toLocaleString()}`, inline: true },
  { name: 'Rollen:', value: `<@&709132913676910592> <@&709125249496515003> <@&709131676520808530>\n <@&709131677460463628> <@&748092364865929319> <@&709124989558718514>ㅤ ㅤㅤㅤ  `, inline: false },
)

  msg.channel.send(embed);

}