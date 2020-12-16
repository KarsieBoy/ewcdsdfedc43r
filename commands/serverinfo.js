var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

  const embed = new Discord.MessageEmbed()
.setTitle("Server Info")
.setColor('#b30000')
.setThumbnail(msg.guild.iconURL())
.addFields({ name: "ID:", value: `${msg.guild.id}`, inline: false })
.addFields(
  { name: 'Eigenaar:', value: `${msg.guild.owner.user.username}`, inline: true },
  { name: 'Regio:', value: `${msg.guild.region}`, inline: true },
  { name: 'Bots:', value: `${msg.guild.members.cache.filter(member => member.user.bot).size}`, inline: true },
)
.addFields(
  { name: 'Leden:', value: `${msg.guild.memberCount}`, inline: true },
  { name: 'Online:', value: `${msg.guild.members.cache.filter(member => member.presence.status !== "offline").size}`, inline: true },
  { name: 'Boosts:', value: `${msg.guild.premiumSubscriptionCount}`, inline: true },
)
.addFields(
  { name: 'Tekstkanalen', value: `n`, inline: true },
  { name: 'Spraakkanalen', value: `n`, inline: true },
)
.addFields(
  { name: 'Gemaakt op:', value: `${msg.member.guild.createdAt.toLocaleString()}`, inline: false },
  { name: 'Gejoined op:', value: `${msg.member.joinedAt.toLocaleString()}`, inline: true },
  { name: 'Rollen:', value: `<@&709132913676910592> <@&709125249496515003> <@&709131676520808530>ㅤㅤ ㅤㅤㅤ       <@&709131677460463628> <@&748092364865929319> <@&781595378109644900>`, inline: false },
)

  msg.channel.send(embed);

}