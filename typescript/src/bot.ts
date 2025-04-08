import { Client, GatewayIntentBits } from 'discord.js';
import { token } from '../config/config.json';
import { loadEvents } from './events/ready';
import { loadCommands } from './commands/ping';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.login(token);

client.once('ready', async () => {
  console.log(`Logged in as ${client.user?.tag}!`);
  loadEvents(client);
  loadCommands(client);
});

client.on('error', console.error);
