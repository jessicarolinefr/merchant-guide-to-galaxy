const { convert } = require("./romanNumberParser");

class CommandService {
  constructor(galacticNumberRepository, materialRepository) {
    this._galacticNumberRepository = galacticNumberRepository;
    this._materialRepository = materialRepository;
  }

  mapGalacticToRomanFigure(galacticFigure, romanFigure) {
    this._galacticNumberRepository.save({
      number: galacticFigure,
      value: romanFigure,
    });
  }

  mapMaterialToCredits(quantity, name, credits) {
    const romanNumber = quantity
      .map((figure) => this._galacticNumberRepository.find(figure).value)
      .join("");

    const parsedQuantity = convert(romanNumber);

    this._materialRepository.save({
      name,
      price: credits / parsedQuantity,
    });
  }

  translateGalacticNumber(quantity) {
    const romanNumber = quantity
      .map((figure) => this._galacticNumberRepository.find(figure).value)
      .join("");

    return convert(romanNumber);
  }

  calculateMaterialValue(quantity, materialName) {
    const romanNumber = quantity
      .map((figure) => this._galacticNumberRepository.find(figure).value)
      .join("");

    const parsedQuantity = convert(romanNumber);
    const material = this._materialRepository.find(materialName);

    return material.price * parsedQuantity;
  }
}

module.exports = CommandService;
