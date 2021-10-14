const time = 1000 * 60 * 60 * 12;

export default async (client) => {
  const guild = client.guilds.cache.get(process.env.DISCORD_SERVER_ID);
  setInterval(() => {
    const { memberCount } = guild;
    const channel = guild.channels.cache.get(
      process.env.DISCORD_CHANNEL_TOTAL_MEMBERS
    );
    channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    console.log(`Updating Member Count`);
  }, time);
};
