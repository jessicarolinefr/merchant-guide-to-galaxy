const CommandService = require("../domain/commandService");

describe("CommandService", () => {
  describe("mapGalacticToRomanFigure", () => {
    it("should delegate to galacticNumberRepository", () => {
      const save = jest.fn();
      const fakeGalacticNumberRepository = { save };
      const commandService = new CommandService(fakeGalacticNumberRepository);

      commandService.mapGalacticToRomanFigure("glob", "I");

      expect(save).toHaveBeenCalled();
      expect(save).toHaveBeenCalledWith({ number: "glob", value: "I" });
    });
  });

  describe("mapMaterialToCredits", () => {
    it("should calculate unitary price and save delegating to materialRepository", () => {
      const save = jest.fn();
      const fakeMaterialRepository = { save };
      const find = jest.fn(() => ({ number: "glob", value: "I" }));
      const fakeGalacticNumberRepository = { find };
      const commandService = new CommandService(
        fakeGalacticNumberRepository,
        fakeMaterialRepository
      );

      commandService.mapMaterialToCredits(["glob", "glob"], "Silver", 34);

      expect(save).toHaveBeenCalled();
      expect(save).toHaveBeenCalledWith({ name: "Silver", price: 17 });
      expect(find).toHaveBeenCalled();
    });
  });

  describe("translateGalacticNumber", () => {
    it("should translate galactic numbers", () => {
      const save = jest.fn();
      const fakeGalacticRepository = { save };
      const find = jest.fn(
        (figure) =>
          ({
            pish: { number: "pish", value: "X" },
            tegj: { number: "tegj", value: "L" },
            glob: { number: "glob", value: "I" },
          }[figure])
      );
      const fakeGalacticNumberRepository = { find };
      const commandService = new CommandService(
        fakeGalacticNumberRepository,
        fakeGalacticRepository
      );

      expect(
        commandService.translateGalacticNumber(["pish", "tegj", "glob", "glob"])
      ).toEqual(42);
    });
  });

  describe("calculateMaterialValue", () => {
    it("should calculate the total price to material", () => {
      const fakeMaterialRepository = {
        find: jest.fn(() => ({ name: "Silver", price: 17 })),
      };
      const find = jest.fn(
        (figure) =>
          ({
            glob: { number: "glob", value: "I" },
            prok: { number: "prok", value: "V" },
          }[figure])
      );
      const fakeGalacticNumberRepository = { find };
      const commandService = new CommandService(
        fakeGalacticNumberRepository,
        fakeMaterialRepository
      );

      expect(
        commandService.calculateMaterialValue(["glob", "prok"], "Silver")
      ).toEqual(68);
    });
  });
});
