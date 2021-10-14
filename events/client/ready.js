import { memberCounter } from "../../utils";

export default function () {
  const { client } = this;

  console.log("CyptoBot is online!");
  memberCounter(client);
}
