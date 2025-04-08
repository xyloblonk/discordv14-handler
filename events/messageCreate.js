/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

module.exports = {
  name: 'messageCreate',
  async execute(message, client) {
    if (message.author.bot || !message.content.startsWith(client.prefix)) return;

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
    
    const args = message.content.slice(client.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
    
    const command = client.prefixCommands.get(commandName);

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
    
    if (!command) return;

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
    
    try {
      await command.execute(message, args, client);
    } catch (error) {
      console.error(error);
      message.reply('There was an error executing that command.');
    }
  }
};

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
