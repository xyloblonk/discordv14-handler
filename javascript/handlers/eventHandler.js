/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

const fs = require('fs');
const path = require('path');
const eventsPath = path.join(__dirname, '..', 'events');

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

module.exports = (client) => {
  const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

  /*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

  for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
    
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client));
    } else {
      client.on(event.name, (...args) => event.execute(...args, client));
    }
  }
};

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
