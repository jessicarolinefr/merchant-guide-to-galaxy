const factory = require("../application/factory");

describe("interpreter", () => {
  it("should interpret commands and responde accordingly", () => {
    const interpreter = factory();

    expect(interpreter("glob is I")).toBeUndefined();
    expect(interpreter("prok is V")).toBeUndefined();
    expect(interpreter("pish is X")).toBeUndefined();
    expect(interpreter("tegj is L")).toBeUndefined();
    expect(interpreter("glob glob Silver is 34 Credits")).toBeUndefined();
    expect(interpreter("glob prok Gold is 57800 Credits")).toBeUndefined();
    expect(interpreter("pish pish Iron is 3910 Credits")).toBeUndefined();
    expect(interpreter("how much is pish tegj glob glob ?")).toEqual(
      "pish tegj glob glob is 42"
    );
    expect(interpreter("how many Credits is glob prok Silver ?")).toEqual(
      "glob prok Silver is 68 Credits"
    );
    expect(interpreter("how many Credits is glob prok Gold ?")).toEqual(
      "glob prok Gold is 57800 Credits"
    );
    expect(interpreter("how many Credits is glob prok Iron ?")).toEqual(
      "glob prok Iron is 782 Credits"
    );
    expect(
      interpreter(
        "how much wood could a woodchuck chuck if a woodchuck could chuck wood ?"
      )
    ).toEqual("I have no idea what you are talking about");
  });
});
