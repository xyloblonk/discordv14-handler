/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
    
    const command = client.slashCommands.get(interaction.commandName);
    if (!command) return;

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
    
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'There was an error executing that slash command.', ephemeral: true });
    }
  }
};

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
