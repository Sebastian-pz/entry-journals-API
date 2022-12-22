// Se utiliza con la finalidad de abstraer
// la mayor cantidad de lógica posible de las rutas
import { DiaryEntry, DiaryEntryNoSensitive } from '../types';
import diaryEntries from './diariesData.json';

// Se hace necesario la acerción de tipos (as ****)
const diaries: DiaryEntry[] = diaryEntries as DiaryEntry[];

export function hola() {
  return 'Hola mundo';
}

export const getEntries = (): DiaryEntry[] => {
  return diaries;
};

// Retusns without sensitive info
export const getEntriesWithoutSensitiveInfo = (): DiaryEntryNoSensitive[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility,
    };
  });
};

export const addEntry = (): undefined => {
  return undefined;
};
