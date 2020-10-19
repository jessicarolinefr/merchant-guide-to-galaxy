const GalacticNumberRepository = require("../galacticNumberRepository");

describe("GalacticNumberRepository", () => {
  it("Should store galactic numbers values", () => {
    const repository = new GalacticNumberRepository();

    repository.save({ number: "glob", value: "I" });

    expect(repository.find("glob").value).toEqual("I");
  });
});
