const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.slashCommands = new Collection();
client.prefixCommands = new Collection();
client.prefix = prefix;

require('./handlers/eventHandler')(client);
require('./handlers/slashCommandHandler')(client);
require('./handlers/prefixCommandHandler')(client);

client.login(token);
