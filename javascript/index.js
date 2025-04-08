/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

// TABLE OF CONTENTS
// 1 Import required dependencies
// 2 Setup the client
// 3 Setup the client commands
// 4 Import the handlers
// 5 Login to the client

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

// 1 Import required dependencies
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token, prefix } = require('./config.json');

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

// 2 Setup the client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

// 3 Setup the client commands
client.slashCommands = new Collection();
client.prefixCommands = new Collection();
client.prefix = prefix;

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

// 4 Import the handlers
require('./handlers/eventHandler')(client);
require('./handlers/slashCommandHandler')(client);
require('./handlers/prefixCommandHandler')(client);

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

// 5 Login to the client
client.login(token);

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
