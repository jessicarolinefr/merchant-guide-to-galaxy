const MaterialRepository = require("../materialRepository");

describe("MaterialRepository", () => {
  it("should store material price", () => {
    const repository = new MaterialRepository();

    repository.save({ name: "Silver", price: 17 });
    expect(repository.find("Silver").price).toEqual(17);

    repository.save({ name: "Gold", price: 14450 });
    expect(repository.find("Gold").price).toEqual(14450);

    repository.save({ name: "Iron", price: 195.5 });
    expect(repository.find("Iron").price).toEqual(195.5);
  });
});
