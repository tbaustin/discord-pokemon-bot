import * as events from "../events";

export default function (client, Discord) {
  for (const file in events) {
    const event = events[file];

    if (file === "ready") {
      client.once(file, event.bind({ client, Discord }));
      return;
    }

    client.on(file, event.bind({ client, Discord }));
  }
}
