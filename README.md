## Akairo-Discord-Bot-Template

A CRUD starter template for a Discord bot built with **discord-akario**. Dependencies may be out of date and will need updated.

## Database

**Quick.db** is installed by default with some example helper methods defined in `structures/Guild.js` & `structures/GuildMember.js`. If you would like to change it out with anotherdatabase, it is easy to do so.

View more information about **Quick.db** [here](https://quickdb.js.org)

More information on discord-akairo's database handling can be found [here](https://discord-akairo.github.io/#/docs/main/8.0.0/other/providers).

## Getting Started

1. Clone/Download this repo
2. Install the packages using npm.
3. Create a `.env` file & place your token under a property titled 'TOKEN' to run. An example `.env` file has been provided.
4. Modify the prefix and ownerID in `config.json`
5. Run the bot

## Default Commands

The following commands are supplied within this template: 
`Help`, `Eval`, `Ping`, `Prefix`.

Easy to add more commands following the above 3 commands command structure. Even easier to add new Command Categories.

## Creating a Discord Bot
 
1. Visit Discords Developer Portal: https://discordapp.com/developers/applications/
2. Log into your discord account, if not already.
3. Click "New Application". 
4. Enter in your applications name.
5. Click on "Bot".
6. Then make your application into a bot process.

This will allow you to obtain your Discord Bots Token.

> Its is important you keep your `Bot Token` safe and private. DO NOT GIVE ANYONE YOUR BOTS TOKEN.
