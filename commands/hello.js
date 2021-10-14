module.exports = {
  name: "hello",
  description: "this is a hello command!",
  execute: (message, args) => {
    message.channel.send(`Hi ${message.author.username}, nice to meet you!`);
  }
};
