import { MessageMentions } from "discord.js";

export default (content) => {
  // The id is the first and only match found by the RegEx.
  const matches = content.match(MessageMentions.ROLES_PATTERN);

  // If supplied variable was not a mention, matches will be null instead of an array.
  if (!matches) return;

  // The first element in the matches array will be the entire mention, not just the ID,
  // so use index 1.
  return matches;
};
