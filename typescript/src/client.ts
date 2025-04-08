import { Client } from 'discord.js';

export const loadEvents = (client: Client): void => {
  const eventFiles = ['ready'];

  eventFiles.forEach((event) => {
    import(`./events/${event}`).then((eventModule) => {
      if (eventModule.default) {
        client.on(event, eventModule.default);
      }
    });
  });
};
