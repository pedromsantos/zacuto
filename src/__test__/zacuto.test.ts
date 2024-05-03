import { ChartPrimitives, PlanetInSignPrimitives } from '../primitives/ChartPrimitives';
import { Zacuto } from '../UseCases/zacuto';

describe('zacuto', () => {
  describe('chart must include data for planet', () => {
    test('Sol', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: [],
        housesInSigns: [],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for "Sol"'
      );
    });

    test('Luna', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: [{ planet: 'Sol', sign: 'Scorpio', degree: 4 }],
        housesInSigns: [],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for "Luna"'
      );
    });

    test('Mercurius', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: [
          { planet: 'Sol', sign: 'Aires', degree: 1 },
          { planet: 'Luna', sign: 'Aires', degree: 2 },
        ],
        housesInSigns: [],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for "Mercurius"'
      );
    });

    test('Venus', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: [
          { planet: 'Sol', sign: 'Taurus', degree: 1 },
          { planet: 'Luna', sign: 'Taurus', degree: 2 },
          { planet: 'Mercurius', sign: 'Taurus', degree: 3 },
        ],
        housesInSigns: [],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for "Venus"'
      );
    });

    test('Mars', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: [
          { planet: 'Sol', sign: 'Gemini', degree: 1 },
          { planet: 'Luna', sign: 'Gemini', degree: 2 },
          { planet: 'Mercurius', sign: 'Gemini', degree: 3 },
          { planet: 'Venus', sign: 'Gemini', degree: 4 },
        ],
        housesInSigns: [],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for "Mars"'
      );
    });

    test('Jupiter', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: [
          { planet: 'Sol', sign: 'Cancer', degree: 1 },
          { planet: 'Luna', sign: 'Cancer', degree: 2 },
          { planet: 'Mercurius', sign: 'Cancer', degree: 3 },
          { planet: 'Venus', sign: 'Cancer', degree: 4 },
          { planet: 'Mars', sign: 'Cancer', degree: 5 },
        ],
        housesInSigns: [],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for "Jupiter"'
      );
    });

    test('Saturnus', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: [
          { planet: 'Sol', sign: 'Scorpio', degree: 1 },
          { planet: 'Luna', sign: 'Scorpio', degree: 2 },
          { planet: 'Mercurius', sign: 'Scorpio', degree: 3 },
          { planet: 'Venus', sign: 'Scorpio', degree: 4 },
          { planet: 'Mars', sign: 'Scorpio', degree: 5 },
          { planet: 'Jupiter', sign: 'Scorpio', degree: 6 },
        ],
        housesInSigns: [],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for "Saturnus"'
      );
    });
  });

  describe('chart must include data for house', () => {
    const planetsInSigns: PlanetInSignPrimitives[] = [
      { planet: 'Sol', sign: 'Scorpio', degree: 1 },
      { planet: 'Luna', sign: 'Scorpio', degree: 2 },
      { planet: 'Mercurius', sign: 'Scorpio', degree: 3 },
      { planet: 'Venus', sign: 'Scorpio', degree: 4 },
      { planet: 'Mars', sign: 'Scorpio', degree: 5 },
      { planet: 'Jupiter', sign: 'Scorpio', degree: 6 },
      { planet: 'Saturnus', sign: 'Scorpio', degree: 7 },
    ];

    test('I', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: planetsInSigns,
        housesInSigns: [],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for house "I"'
      );
    });

    test('II', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: planetsInSigns,
        housesInSigns: [{ house: 'I', sign: 'Aires', degree: 1 }],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for house "II"'
      );
    });

    test('III', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: planetsInSigns,
        housesInSigns: [
          { house: 'I', sign: 'Aires', degree: 1 },
          { house: 'II', sign: 'Aires', degree: 2 },
        ],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for house "III"'
      );
    });

    test('IV', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: planetsInSigns,
        housesInSigns: [
          { house: 'I', sign: 'Aires', degree: 1 },
          { house: 'II', sign: 'Aires', degree: 2 },
          { house: 'III', sign: 'Aires', degree: 3 },
        ],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for house "IV"'
      );
    });

    test('V', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: planetsInSigns,
        housesInSigns: [
          { house: 'I', sign: 'Aires', degree: 1 },
          { house: 'II', sign: 'Aires', degree: 2 },
          { house: 'III', sign: 'Aires', degree: 3 },
          { house: 'IV', sign: 'Aires', degree: 4 },
        ],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for house "V"'
      );
    });

    test('VI', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: planetsInSigns,
        housesInSigns: [
          { house: 'I', sign: 'Aires', degree: 1 },
          { house: 'II', sign: 'Aires', degree: 2 },
          { house: 'III', sign: 'Aires', degree: 3 },
          { house: 'IV', sign: 'Aires', degree: 4 },
          { house: 'V', sign: 'Aires', degree: 5 },
        ],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for house "VI"'
      );
    });

    test('VII', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: planetsInSigns,
        housesInSigns: [
          { house: 'I', sign: 'Aires', degree: 1 },
          { house: 'II', sign: 'Aires', degree: 2 },
          { house: 'III', sign: 'Aires', degree: 3 },
          { house: 'IV', sign: 'Aires', degree: 4 },
          { house: 'V', sign: 'Aires', degree: 5 },
          { house: 'VI', sign: 'Aires', degree: 6 },
        ],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for house "VII"'
      );
    });

    test('VIII', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: planetsInSigns,
        housesInSigns: [
          { house: 'I', sign: 'Aires', degree: 1 },
          { house: 'II', sign: 'Aires', degree: 2 },
          { house: 'III', sign: 'Aires', degree: 3 },
          { house: 'IV', sign: 'Aires', degree: 4 },
          { house: 'V', sign: 'Aires', degree: 5 },
          { house: 'VI', sign: 'Aires', degree: 6 },
          { house: 'VII', sign: 'Aires', degree: 7 },
        ],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for house "VIII"'
      );
    });

    test('IX', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: planetsInSigns,
        housesInSigns: [
          { house: 'I', sign: 'Aires', degree: 1 },
          { house: 'II', sign: 'Aires', degree: 2 },
          { house: 'III', sign: 'Aires', degree: 3 },
          { house: 'IV', sign: 'Aires', degree: 4 },
          { house: 'V', sign: 'Aires', degree: 5 },
          { house: 'VI', sign: 'Aires', degree: 6 },
          { house: 'VII', sign: 'Aires', degree: 7 },
          { house: 'VIII', sign: 'Aires', degree: 8 },
        ],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for house "IX"'
      );
    });

    test('X', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: planetsInSigns,
        housesInSigns: [
          { house: 'I', sign: 'Aires', degree: 1 },
          { house: 'II', sign: 'Aires', degree: 2 },
          { house: 'III', sign: 'Aires', degree: 3 },
          { house: 'IV', sign: 'Aires', degree: 4 },
          { house: 'V', sign: 'Aires', degree: 5 },
          { house: 'VI', sign: 'Aires', degree: 6 },
          { house: 'VII', sign: 'Aires', degree: 7 },
          { house: 'VIII', sign: 'Aires', degree: 8 },
          { house: 'IX', sign: 'Aires', degree: 9 },
        ],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for house "X"'
      );
    });

    test('XI', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: planetsInSigns,
        housesInSigns: [
          { house: 'I', sign: 'Aires', degree: 1 },
          { house: 'II', sign: 'Aires', degree: 2 },
          { house: 'III', sign: 'Aires', degree: 3 },
          { house: 'IV', sign: 'Aires', degree: 4 },
          { house: 'V', sign: 'Aires', degree: 5 },
          { house: 'VI', sign: 'Aires', degree: 6 },
          { house: 'VII', sign: 'Aires', degree: 7 },
          { house: 'VIII', sign: 'Aires', degree: 8 },
          { house: 'IX', sign: 'Aires', degree: 9 },
          { house: 'X', sign: 'Aires', degree: 10 },
        ],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for house "XI"'
      );
    });

    test('XII', () => {
      const primitives: ChartPrimitives = {
        name: '',
        location: '',
        date: '',
        planetsInSigns: planetsInSigns,
        housesInSigns: [
          { house: 'I', sign: 'Aires', degree: 1 },
          { house: 'II', sign: 'Aires', degree: 2 },
          { house: 'III', sign: 'Aires', degree: 3 },
          { house: 'IV', sign: 'Aires', degree: 4 },
          { house: 'V', sign: 'Aires', degree: 5 },
          { house: 'VI', sign: 'Aires', degree: 6 },
          { house: 'VII', sign: 'Aires', degree: 7 },
          { house: 'VIII', sign: 'Aires', degree: 8 },
          { house: 'IX', sign: 'Aires', degree: 9 },
          { house: 'X', sign: 'Aires', degree: 10 },
          { house: 'XI', sign: 'Aires', degree: 11 },
        ],
      };

      expect(() => new Zacuto().validateCharPrimitives(primitives)).toThrow(
        'Chart must include data for house "XII"'
      );
    });
  });
});
