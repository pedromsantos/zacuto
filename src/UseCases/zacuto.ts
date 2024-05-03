import { ChartPrimitives, HousePrimitives, PlanetPrimitives } from '../primitives/ChartPrimitives';

export class Zacuto {
  validateCharPrimitives(chart: ChartPrimitives) {
    const mustHaveHouses: HousePrimitives[] = [
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
      'X',
      'XI',
      'XII',
    ];
    const mustHavePlanets: PlanetPrimitives[] = [
      'Sol',
      'Luna',
      'Mercurius',
      'Venus',
      'Mars',
      'Jupiter',
      'Saturnus',
    ];

    mustHavePlanets.forEach((planet) => {
      if (this.containsPlanet(chart, planet) == undefined) {
        throw `Chart must include data for "${planet}"`;
      }
    });

    mustHaveHouses.forEach((house) => {
      if (this.containsHouse(chart, house) == undefined) {
        throw `Chart must include data for house "${house}"`;
      }
    });
  }

  private containsPlanet(chart: ChartPrimitives, planet: PlanetPrimitives) {
    return chart.planetsInSigns.find((p) => p.planet == planet);
  }

  private containsHouse(chart: ChartPrimitives, house: HousePrimitives) {
    return chart.housesInSigns.find((h) => h.house == house);
  }
}
