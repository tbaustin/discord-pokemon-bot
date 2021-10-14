export default (args, text) =>
  args.findIndex((arg) => {
    const matcher = new RegExp(arg, "gim");
    return matcher.test(text);
  }) !== -1;
