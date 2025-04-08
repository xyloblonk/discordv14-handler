/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

const fs = require('fs');
const path = require('path');

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

module.exports = (client) => {
  const commandFiles = fs.readdirSync(path.join(__dirname, '..', 'prefixCommands')).filter(file => file.endsWith('.js'));

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
  
  for (const file of commandFiles) {
    const command = require(`../prefixCommands/${file}`);
    if ('name' in command && 'execute' in command) {
      client.prefixCommands.set(command.name, command);
    } else {
      console.warn(`[WARNING] Prefix command ${file} is missing "name" or "execute".`);
    }
  }
};

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
