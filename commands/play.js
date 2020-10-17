/*var Discord = require('discord.js');
const ytdl = require("ytdl-core");

exports.run = async(client, msg, args) => {
    if (!msg.member.hasPermission("BAN_MEMBERS")) return;

    if(!msg.member.voice.channel) return msg.react('❓');

    if(msg.guild.me.voice.channel) return msg.react('❓');

    if(!args[0]) return msg.react('❓');

    var validate = await ytdl.validateURL(args[0]);
    if(!validate) return msg.channel.send("**Geef aub een geldige URL op!**");

    var info = await ytdl.getInfo(args[0]);

    var options = {seek: 3, volume: 1 };

    var channelJoin = msg.member.voice.channel.join()
        .then(voiceChannel => {

            var stream = ytdl(args[0], { filter: 'audioonly' });
            var dispatcher = voiceChannel.play(stream, options);


        }).catch(console.err);

        msg.channel.send(`:notes: **Speelt** \`${info.videoDetails.title}\` **nu af!**`);
    
}
*/