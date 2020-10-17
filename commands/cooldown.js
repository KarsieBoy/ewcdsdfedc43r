var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

msg.channel.setRateLimitPerUser(1)
}
