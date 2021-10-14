require("dotenv").config();

import Discord, { Client, Collection, Intents } from "discord.js";
import * as handlers from "./handlers";

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES
  ]
});

/* set commands on client using Discord's internal Collection */
client.commands = new Collection();
client.events = new Collection();

for (const file in handlers) {
  const handler = handlers[file];
  handler(client, Discord);
}

/* Login to client */

client.login(process.env.DISCORD_BOT_TOKEN);
