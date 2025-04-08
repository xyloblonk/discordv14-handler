const fs = require('fs');
const path = require('path');
const commandsPath = path.join(__dirname, '..', 'commands');

module.exports = (client) => {
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.warn(`[WARNING] The command at ${filePath} is missing required "data" or "execute".`);
    }
  }
};
