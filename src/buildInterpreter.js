const parseMaterial = (value) => {
  const parts = value.split(/\s+/);
  return {
    name: parts[parts.length - 1],
    quantity: parts.slice(0, -1),
  };
};

const parseGalacticNumbers = (value) => {
  return value.split(/\s+/);
};

const buildInterpreter = (command) => (line) => {
  const mapGalacticToRomanFigureRegex = /(?<galacticFigure>[a-zA-Z]+)\s+is\s+(?<romanFigure>[A-Z])/;
  const mapMaterialToCreditsRegex = /(?<galacticNumbersAndMaterial>[a-zA-Z][a-zA-Z\s]+[a-zA-Z])\s+is\s+(?<credits>\d+)\s+Credits/;
  const translateGalacticNumberRegex = /how\s+much\s+is\s+(?<galacticNumber>[a-zA-Z][a-zA-Z\s]+[a-zA-Z])\s+\?/;
  const howManyCreditsRegex = /how\s+many\s+Credits\s+is\s+(?<galacticNumbersAndMaterial>[a-zA-Z][a-zA-Z\s]+[a-zA-Z])\s+\?/;

  if (line.match(mapGalacticToRomanFigureRegex)) {
    const result = line.match(mapGalacticToRomanFigureRegex);
    command.mapGalacticToRomanFigure(
      result.groups.galacticFigure,
      result.groups.romanFigure
    );
  } else if (line.match(mapMaterialToCreditsRegex)) {
    const result = line.match(mapMaterialToCreditsRegex);
    const material = parseMaterial(result.groups.galacticNumbersAndMaterial);

    command.mapMaterialToCredits(
      material.quantity,
      material.name,
      parseInt(result.groups.credits)
    );
  } else if (line.match(translateGalacticNumberRegex)) {
    const result = line.match(translateGalacticNumberRegex).groups
      .galacticNumber;
    const galacticNumbers = parseGalacticNumbers(result);
    const number = command.translateGalacticNumber(galacticNumbers);

    return `${galacticNumbers.join(" ")} is ${number}`;
  } else if (line.match(howManyCreditsRegex)) {
    const result = line.match(howManyCreditsRegex);
    const material = parseMaterial(result.groups.galacticNumbersAndMaterial);
    const credits = command.howManyCredits(material.quantity, material.name);

    return `${material.quantity.join(" ")} ${
      material.name
    } is ${credits} Credits`;
  } else {
    return "I have no idea what you are talking about";
  }
};

module.exports = buildInterpreter;
