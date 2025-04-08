/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  }
};

/*
  MADE BY XYLOBLONK
  https://github.com/xyloblonk/discordv14-handler
*/
