export type PlanetPrimitives =
  | 'Sol'
  | 'Luna'
  | 'Mercurius'
  | 'Venus'
  | 'Mars'
  | 'Jupiter'
  | 'Saturnus'
  | 'Uranus'
  | 'Neptunus'
  | 'Pluto'
  | 'Ceres'
  | 'Pallas'
  | 'Juno'
  | 'Vesta'
  | 'Chiron';

export type SignPrimitives =
  | 'Aires'
  | 'Taurus'
  | 'Gemini'
  | 'Cancer'
  | 'Leo'
  | 'Virgo'
  | 'Libra'
  | 'Scorpio'
  | 'Sagittarius'
  | 'Capricorn'
  | 'Aquarius'
  | 'Pisces';

export type HousePrimitives =
  | 'I'
  | 'II'
  | 'III'
  | 'IV'
  | 'V'
  | 'VI'
  | 'VII'
  | 'VIII'
  | 'IX'
  | 'X'
  | 'XI'
  | 'XII';

export type DegreeInSign =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30;

export interface PlanetInSignPrimitives {
  planet: PlanetPrimitives;
  sign: SignPrimitives;
  degree: DegreeInSign;
}

export interface HouseInSignPrimitives {
  house: HousePrimitives;
  sign: SignPrimitives;
  degree: DegreeInSign;
}

export interface ChartPrimitives {
  name: string;
  location: string;
  date: string;
  planetsInSigns: PlanetInSignPrimitives[];
  housesInSigns: HouseInSignPrimitives[];
}
