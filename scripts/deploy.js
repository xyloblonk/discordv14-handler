/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
const { clientId, guildId, token } = require('./config.json');

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

const commands = [];
const commandsPath = path.join(__dirname, 'slashCommands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

for (const file of commandFiles) {
  const command = require(`./slashCommands/${file}`);
  if ('data' in command && 'execute' in command) {
    commands.push(command.data.toJSON());
  } else {
    console.warn(`[WARNING] Slash command ${file} is missing "data" or "execute".`);
  }
}

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

const rest = new REST({ version: '10' }).setToken(token);

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

(async () => {
  try {
    console.log(`🔄 Refreshing ${commands.length} application (slash) commands for guild ${guildId}...`);

    const data = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId), // Routes.applicationCommands(clientId)
      { body: commands }
    );

    console.log(`✅ Successfully reloaded ${data.length} slash commands.`);
  } catch (error) {
    console.error('❌ Error registering slash commands:', error);
  }
})();

// Want global deploy instead? Replace the .put() call above with this:
// Routes.applicationCommands(clientId)

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
