class GalacticNumberRepository {
  constructor() {
    this._numbers = {};
  }

  save(galacticNumber) {
    this._numbers[galacticNumber.number] = galacticNumber.value;
  }

  find(galacticNumber) {
    return {
      number: galacticNumber,
      value: this._numbers[galacticNumber],
    };
  }
}

module.exports = GalacticNumberRepository;
