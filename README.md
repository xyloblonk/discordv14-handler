<img src="https://capsule-render.vercel.app/api?type=waving&color=4B4453&height=200&section=header&text=discordv14-handler&fontColor=ffffff&fontSize=30&animation=fadeIn" />
    </br>
  <a target="_blank" href="https://heroku.com/deploy/?template=https://github.com/xyloblonk/discordv12-utility-bot"><img alt="Deploy to Heroku" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/heroku.svg"></a>
<a target="_blank" href="https://replit.com/github/xyloblonk/discordv14-handler"><img alt="Run on Replit" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/replit.svg"></a>
<a target="_blank" href="https://glitch.com/edit/#!/import/github/xyloblonk/discordv14-handler"><img alt="Remix on Glitch" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/glitch.svg"></a>
<a target="_blank" href="https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/xyloblonk/discordv14-handler"><img alt="Deploy to IBM Cloud" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/ibmcloud.svg"></a>
<a target="_blank" href="https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/xyloblonk/discordv14-handler"><img alt="Deploy to Amplify Console" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/amplifyconsole.svg"></a>
<a target="_blank" href="https://deploy.cloud.run/?git_repo=https://github.com/xyloblonk/discordv14-handler"><img alt="Run on Google Cloud" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/googlecloud.svg"></a>
<a target="_blank" href="https://railway.app/new/template?template=https://github.com/xyloblonk/discordv14-handler"><img alt="Deploy on Railway" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/railway.svg"></a>
<a target="_blank" href="https://render.com/deploy?repo=https://github.com/xyloblonk/discordv14-handler"><img alt="Deploy to Render" src="https://binbashbanana.github.io/deploy-buttons/buttons/remade/render.svg"></a>
  </br>

# Discord.js v14 Command & Event Handler

A clean and scalable bot structure for Discord.js v14 using **CommonJS** or **ESM**, supports **slash commands**, **prefix commands**, and **handlers**.

## 🔧 Features
- ⚡ **JavaScript & TypeScript support**
- 🧩 **Slash commands** (`/`)
- 💬 **Prefix commands** (`!ping`)
- 📁 **Organized folder structure** for commands and events
- 🔁 **Dynamic loading** for commands & events
- ✅ **Easy to scale and maintain** as your bot grows
- 🔐 Uses **config.json** and/or **.env** for setup
- 📚 **Comprehensive documentation** for easy setup and usage

## 🚀 Getting Started

### 1. Clone the repo

```
git clone https://github.com/xyloblonk/discordjs-v14-handler.git
cd discordjs-v14-handler
npm install
```

### 2. Configure the bot
Edit config.json with your bot info:

```
{
  "token": "YOUR_BOT_TOKEN",
  "prefix": "!",
  "clientId": "YOUR_CLIENT_ID",
  "guildId": "YOUR_GUILD_ID"
}
```

3. Deploy slash commands
Single Guild:
```
node build-guild
```
Global:
```
node build-global
```
4. Run the bot
```
npm start
```
or
```
npm run
```

## 🧠 Example Commands - JavaScript
Prefix command — ping
```
module.exports = {
  name: 'ping',
  description: 'Replies with Pong!',
  async execute(message, args, client) {
    message.reply('Pong!');
  }
};
```
Slash command — ping
```
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  }
};
```

## 🧠 Example Commands - TypeScript
The entirety of the TypeScript handler is still wip. Don't use it for prod!

## ⚙️ Handler Overview
### Event Handler
- Automatically loads all events from /events and registers them. 

### Slash Command Handler
- Loads all slash commands from /slashCommands into the client's slashCommands collection. 

### Prefix Command Handler
- Loads message-based commands from /prefixCommands into the prefixCommands collection. 

## 🧪 Future Features
- **Button/SelectMenu interaction support**
- **Command cooldowns** to limit command usage
- **Role-based permission guards** to restrict command usage
- **Subcommand handling** for more complex commands
- **Command logging** for better tracking

## 🧪 Features in Development
- **TypeScript support** (in progress)
- **MongoDB Integration** for data storage
- **Custom API** for integrating external services
- **Dashboard** for managing bot settings

## 🛠️ Requirements
- Node.js v20 or higher
- Discord.js v14+
- **MongoDB SRV Link** (Free, used for bot data storage and persistence)
- A server to run the bot on (local or cloud)
- **API Key** from [XyloBlonk API](https://discord.xyloblonk.xyz) (needed for certain advanced features)
