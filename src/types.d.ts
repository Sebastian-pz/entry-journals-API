export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
export type Visibility = 'great' | 'good' | 'ok' | 'poor';

// Explicación de por qué interface abajo
export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type DiaryEntryNoSensitive = Omit<DiaryEntry, 'comment'>;

// Una interfaz está pensada para ser extendible (como herencia)
// interface extendedInterface extends DiaryEntry {
//   flightNumber: number;
// }
