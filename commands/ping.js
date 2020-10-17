exports.run = async(client, msg, args) => {
    msg.channel.send(`:ping_pong: Pong! ${client.ws.ping}ms`);
}