export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
export enum WeatherOptions {
  sunny = 'sunny',
  rainy = 'rainy',
  cloudy = 'cloudy',
  windy = 'windy',
  stormy = 'stormy',
}

export type Visibility = 'great' | 'good' | 'ok' | 'poor';
export enum VisibilityOptions {
  great = 'great',
  good = 'good',
  ok = 'ok',
  poor = 'poor',
}
// Explicación de por qué interface abajo
export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type DiaryEntryNoSensitive = Omit<DiaryEntry, 'comment'>;
export type DiaryEntryNoID = Omit<DiaryEntry, 'id'>;

// Una interfaz está pensada para ser extendible (como herencia)
// interface extendedInterface extends DiaryEntry {
//   flightNumber: number;
// }
