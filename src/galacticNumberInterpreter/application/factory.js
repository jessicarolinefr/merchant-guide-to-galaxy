const buildInterpreter = require("./buildInterpreter");
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

  return buildInterpreter(commandService);
};

module.exports = build;
