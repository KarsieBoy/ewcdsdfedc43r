var config = require('./config.json');
var Discord = require('discord.js');
const { REPL_MODE_SLOPPY } = require('repl');
const client = new Discord.Client();

client.on('ready', async() => {
    console.log('Bot is online');
    client.user.setActivity("Goede voornemens", { type: "WATCHING" });
    });

client.on('message', async(msg) => {
    if(msg.author.bot) return;
    if(!msg.guild) return;

    var prefix = config.prefix;
    if(!msg.content.toLowerCase().startsWith(prefix)) return;

    var args = msg.content.split(' ');
    var cmd = args.shift().slice(prefix.length).toLowerCase();

    try {
        var file = require(`./commands/${cmd}.js`);
        file.run(client, msg, args);
    } catch(err) {
        msg.channel.send("Dit commando bestaat niet!");
    }
});

client.login(proccess.env.token);