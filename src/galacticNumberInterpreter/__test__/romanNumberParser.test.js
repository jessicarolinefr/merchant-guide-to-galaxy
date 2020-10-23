const { convert, isValidRomanFigure } = require("../domain/romanNumberParser");

describe("convert", () => {
  it("should convert I to 1", () => {
    expect(convert("I")).toEqual(1);
  });

  it("should convert V to 5", () => {
    expect(convert("V")).toEqual(5);
  });

  it("should convert X to 10", () => {
    expect(convert("X")).toEqual(10);
  });

  it("should convert L to 50", () => {
    expect(convert("L")).toEqual(50);
  });

  it("should convert C to 100", () => {
    expect(convert("C")).toEqual(100);
  });

  it("should convert D to 500", () => {
    expect(convert("D")).toEqual(500);
  });

  it("should convert M to 1000", () => {
    expect(convert("M")).toEqual(1000);
  });

  it("should convert II to 2", () => {
    expect(convert("II")).toEqual(2);
  });

  it("should be a string", () => {
    expect(() => convert("IX1")).toThrow();
  });

  it("should not allow lowercase figures", () => {
    expect(() => convert("xxx")).toThrow();
  });

  it("should convert CM to 900", () => {
    expect(convert("CM")).toEqual(900);
  });

  it("should convert CD to 400", () => {
    expect(convert("CD")).toEqual(400);
  });

  it("should convert XL to 40", () => {
    expect(convert("XL")).toEqual(40);
  });

  it("should convert IX to 9", () => {
    expect(convert("IX")).toEqual(9);
  });

  it("should convert IV to 4", () => {
    expect(convert("IV")).toEqual(4);
  });

  it("should convert CDXL to 440", () => {
    expect(convert("CDXL")).toEqual(440);
  });

  it("should convert CDXLV to 445", () => {
    expect(convert("CDXLV")).toEqual(445);
  });

  it("should convert CMLIX to 959", () => {
    expect(convert("CMLIX")).toEqual(959);
  });

  it("should convert MCMXCV", () => {
    expect(convert("MCMXCV")).toEqual(1995);
  });

  it("should throw convert IM", () => {
    expect(() => convert("IM")).toThrow();
  });

  it("should throw convert IXCM", () => {
    expect(() => convert("IXCM")).toThrow();
  });

  it("should not convert IIII", () => {
    expect(() => convert("IIII")).toThrow();
  });

  it("should not convert VV", () => {
    expect(() => convert("VV")).toThrow();
  });

  it("should not convert MMMM", () => {
    expect(() => convert("MMMM")).toThrow();
  });

  it("should not convert XXXX", () => {
    expect(() => convert("XXXX")).toThrow();
  });

  it("should not convert LL", () => {
    expect(() => convert("LL")).toThrow();
  });

  it("should not convert CCCC", () => {
    expect(() => convert("CCCC")).toThrow();
  });

  it("should not convert DD", () => {
    expect(() => convert("DD")).toThrow();
  });
});

describe("isValidRomanFigure", () => {
  it("Should accept I", () => {
    expect(isValidRomanFigure("I")).toBeTruthy();
  });

  it("should not accept Y", () => {
    expect(isValidRomanFigure("Y")).toBeFalsy();
  });
});
