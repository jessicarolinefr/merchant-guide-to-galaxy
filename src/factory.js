const buildInterpreter = require("./buildInterpreter");
const CommandService = require("./commandService");
const MaterialRepository = require("./materialRepository");
const GalacticNumberRepository = require("./galacticNumberRepository");

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
