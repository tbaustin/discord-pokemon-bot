import { searchPokemon, cleanName } from "../utils";

module.exports = {
  name: "hello",
  description: "this is a hello command!",
  execute: async (message, pokemon, Discord) => {
    if (!pokemon || pokemon.length) {
      message.channel.send(`Searching for ${pokemon}...`);
      //Search a pokemon containing the term
      const result = await searchPokemon(pokemon);
      if (!result) {
        message.reply(
          `Sorry, no pokemon by the name ${pokemon}, or we could not find this pokemon.`
        );

        return;
      }

      const stats = result.stats.map(({ base_stat, stat }) => ({
        name: cleanName(stat.name),
        value: `${base_stat}`,
        inline: true
      }));

      const types = result.types.map(({ type, slot }) => ({
        name: `Type: ${slot}`,
        value: type.name,
        inline: true
      }));

      const embed = new Discord.MessageEmbed()
        .setColor("#304281")
        .setTitle(result.name.toUpperCase())
        .setURL(result.forms[0].url)
        .setDescription("Pokemon stats")
        .addFields(
          { name: "ID", value: `${result.id}`, inline: true },
          { name: "Height", value: `${result.height}`, inline: true },
          { name: "Weight", value: `${result.weight}`, inline: true },
          ...stats,
          ...types
        )
        .setImage(result.sprites.front_default)
        .setFooter("Try typing in other pokemon!");

      message.channel.send({ embeds: [embed] });
    } else {
      message.reply(`Please type a pokemon`);
    }
  }
};
