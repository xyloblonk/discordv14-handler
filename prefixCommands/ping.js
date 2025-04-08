module.exports = {
  name: 'ping',
  description: 'Replies with Pong!',
  async execute(message, args, client) {
    message.reply('Pong!');
  }
};
