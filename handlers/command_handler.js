import * as commands from "../commands";

export default (client) => {
  for (const file in commands) {
    const command = commands[file];
    if (command.name) {
      client.commands.set(file, command);
    } else {
      continue;
    }
  }
};
