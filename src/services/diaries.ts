// Se utiliza con la finalidad de abstraer
// la mayor cantidad de lógica posible de las rutas
import {
  DiaryEntry,
  DiaryEntryNewData,
  DiaryEntryNoID,
  DiaryEntryNoSensitive,
} from '../types';
import diaryEntries from './diariesData.json';

// Se hace necesario la acerción de tipos (as ****)
let diaries: DiaryEntry[] = diaryEntries as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => {
  return diaries;
};

export const getEntryById = (id: number): DiaryEntry | undefined => {
  return diaries.find((diary) => {
    return diary.id == id;
  });
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

export const addEntry = (entry: DiaryEntryNoID): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaryEntries.map((num) => num.id)) + 1,
    ...entry,
  };

  // This part -> try catch block
  diaryEntries.push(newDiary);
  //
  return newDiary;
};

export const deleteEntry = (id: number): boolean => {
  const initialLength = diaries.length;
  diaries = diaries.filter((diary) => diary.id !== id);

  if (initialLength !== diaries.length) {
    return true;
  }

  return false;
};

export const updateEntry = (
  id: number,
  newData: DiaryEntryNewData
): boolean => {
  const entryToUpdate = diaries.find((diary) => diary.id === id);
  if (!entryToUpdate) {
    return false;
  }

  entryToUpdate.comment = newData.comment;
  entryToUpdate.weather = newData.weather;
  entryToUpdate.visibility = newData.visibility;

  return true;
};
