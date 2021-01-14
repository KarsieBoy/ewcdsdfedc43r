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
        msg.react('❓');
    }
});

client.on("guildMemberAdd", member => {

    const logembed = new Discord.MessageEmbed()
    .setAuthor(`Welkom op de server ${member.user.username}!`, `${member.user.displayAvatarURL({ dynamic: true, size: 2048 })}`)
    .setDescription('Neem een kijkje in <#799349858141864036> om te kijken hoe je geverifieerd kan worden! en terwijl je geverifieerd word kan je de <#793147031984013362> lezen.')
    .setColor('#ff6600')
    client.channels.cache.get('789877967534293023').send(logembed);
})

client.login(process.env.token);