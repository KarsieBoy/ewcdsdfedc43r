var config = require('./config.json');
var Discord = require('discord.js');
var client = new Discord.Client();

client.on('ready', async() => {
    console.log('SteakBot is online');
    client.user.setPresence({
        status: "dnd",
        game: { 
        type: "WATCHING" 
        }
    }
    );
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
        console.warn(err);
    }
});

client.on("guildMemberAdd", member =>{

    var role = member.guild.roles.cache.get('709124989558718514');
    if(!role) return;
    member.roles.add(role);

    var channel = member.guild.channels.cache.get('728299827523485797');
    if(!channel) return;

    channel.send(`**${member} is de server gejoined.**`);

})

client.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.get('728299827523485797');
    welcomeChannel.send (`**${member} heeft de server verlaten.**`);
})



client.login(process.env.token);