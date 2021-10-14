// import { searchPokemon } from "../../utils";

export default async function (message) {
  const { Discord, client } = this; // attached by .bind()
  //"Ignore the message if the bot authored it"
  if (message.author.bot) return;

  const text = message.content.toLowerCase();

  //If the doesn't specifically mention the bot, return
  if (text.includes("@here") || text.includes("@everyone")) return;

  //Return if the message doesn't mention the bot
  if (!message.mentions.has(client.user.id)) return;

  const terms = text
    .replace(/<@!\d+>/, "")
    .trim()
    .split(/ +/);
  const [commandName, param] = terms;
  const command = client.commands.get(commandName);

  if (!command) {
    message.reply(
      `"${commandName}" command does not exist, please check your spelling and try again.`
    );
    return;
  }

  try {
    await command.execute(message, param, Discord);
  } catch (error) {
    console.error(`Error excuting the command: `, error.message);
    await message.reply({
      content: "There was an error while executing this command.",
      ephemeral: true
    });
  }
}
