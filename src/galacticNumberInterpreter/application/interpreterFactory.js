const Interpreter = require("./interpreter");
const CommandService = require("../domain/commandService");
const MaterialRepository = require("../infratructure/materialRepository");
const GalacticNumberRepository = require("../infratructure/galacticNumberRepository");

const build = () => {
  const galacticNumberRepository = new GalacticNumberRepository();
  const materialRepository = new MaterialRepository();
  const commandService = new CommandService(
    galacticNumberRepository,
    materialRepository
  );

  return Interpreter(commandService);
};

module.exports = build;
