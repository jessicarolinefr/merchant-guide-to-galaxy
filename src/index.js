const romanFigureMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  XL: 40,
  L: 50,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const parseRomanFigures = (romanNumber) => {
  let romanFigures = romanNumber.split("");
  const result = [];

  for (let i = 0; i < romanFigures.length; i++) {
    const current = romanFigures[i];
    const next = romanFigures[i + 1];

    if (romanFigureMap[current] < romanFigureMap[next]) {
      const compositeFigure = current.concat(next);

      if (!romanFigureMap[compositeFigure]) {
        throw new Error("Invalid figure");
      }

      result.push(compositeFigure);

      i++;

      continue;
    }

    result.push(current);
  }
  return result;
};

const validateRomanNumber = (romanFigures, romanNumber) => {
  const regex = new RegExp(
    "^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$"
  );

  for (let i = 0; i < romanFigures.length - 1; i++) {
    const current = romanFigures[i];
    const next = romanFigures[i + 1];

    if (
      romanFigureMap[current] < romanFigureMap[next] ||
      !regex.test(romanNumber)
    ) {
      throw new Error("Invalid number");
    }
  }
};

const isValidRomanFigure = (romanFigure) => {
  return !!romanFigureMap[romanFigure];
};

const convert = (romanNumber) => {
  const romanFigures = parseRomanFigures(romanNumber);

  validateRomanNumber(romanFigures, romanNumber);

  const arabicFigures = romanFigures.map((figure) => romanFigureMap[figure]);

  return arabicFigures.reduce((acc, figure) => acc + figure, 0);
};

module.exports = { convert, isValidRomanFigure };
