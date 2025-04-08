import { Client } from 'discord.js';

const ready = (client: Client): void => {
  console.log(`${client.user?.tag} is now online!`);
};

export default ready;
