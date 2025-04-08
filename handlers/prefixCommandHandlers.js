const fs = require('fs');
const path = require('path');

module.exports = (client) => {
  const commandFiles = fs.readdirSync(path.join(__dirname, '..', 'prefixCommands')).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(`../prefixCommands/${file}`);
    if ('name' in command && 'execute' in command) {
      client.prefixCommands.set(command.name, command);
    } else {
      console.warn(`[WARNING] Prefix command ${file} is missing "name" or "execute".`);
    }
  }
};
