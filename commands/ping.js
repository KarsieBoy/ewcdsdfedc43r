exports.run = async(client, msg, args) => {
    msg.channel.send(`:ping_pong: Pong! ${Date.now() - msg.createdTimestamp}ms.`);
}