const fs = require('fs');
const path = require('path');

module.exports = (client) => {
  const commandFiles = fs.readdirSync(path.join(__dirname, '..', 'slashCommands')).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(`../slashCommands/${file}`);
    if ('data' in command && 'execute' in command) {
      client.slashCommands.set(command.data.name, command);
    } else {
      console.warn(`[WARNING] Slash command ${file} is missing "data" or "execute".`);
    }
  }
};
