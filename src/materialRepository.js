class MaterialRepository {
  constructor() {
    this._materials = {};
  }

  save(material) {
    this._materials[material.name] = material.price;
  }

  find(name) {
    return {
      name,
      price: this._materials[name],
    };
  }
}

module.exports = MaterialRepository;
