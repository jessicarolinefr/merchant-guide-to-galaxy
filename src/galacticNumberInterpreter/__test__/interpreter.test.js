const Interpreter = require("../application/interpreter");

describe("Interpreter", () => {
  it("should invoke a function given a command", () => {
    const spy = jest.fn();
    const interpreter = Interpreter({ mapGalacticToRomanFigure: spy });

    const result = interpreter("glob is I");
    expect(result).toBeUndefined();
    expect(spy).toHaveBeenCalledWith("glob", "I");

    interpreter("prok is V");
    expect(spy).toHaveBeenLastCalledWith("prok", "V");

    interpreter("pish is X");
    expect(spy).toHaveBeenLastCalledWith("pish", "X");

    interpreter("tegj is L");
    expect(spy).toHaveBeenLastCalledWith("tegj", "L");
  });

  it("should invoke another function given a command", () => {
    const spy = jest.fn();
    const interpreter = Interpreter({ mapMaterialToCredits: spy });

    const result = interpreter("glob  glob Silver is 34 Credits");
    expect(result).toBeUndefined();
    expect(spy).toHaveBeenCalledWith(["glob", "glob"], "Silver", 34);
  });

  it("should invoke translateGalacticNumber command", () => {
    const spy = jest.fn(() => 42);
    const interpreter = Interpreter({ translateGalacticNumber: spy });

    const result = interpreter("how much is pish  tegj glob glob ?");
    expect(result).toEqual("pish tegj glob glob is 42");
    expect(spy).toHaveBeenCalledWith(["pish", "tegj", "glob", "glob"]);
  });

  it("should invoke calculateMaterialValue command", () => {
    const spy = jest.fn(() => 68);
    const interpreter = Interpreter({ calculateMaterialValue: spy });

    const result = interpreter("how many Credits is glob prok Silver ?");
    expect(result).toEqual("glob prok Silver is 68 Credits");
    expect(spy).toHaveBeenCalledWith(["glob", "prok"], "Silver");
  });

  it("should throw when command is not found", () => {
    const interpreter = Interpreter({});
    const result = interpreter("blablabla");

    expect(result).toEqual("I have no idea what you are talking about");
  });
});
