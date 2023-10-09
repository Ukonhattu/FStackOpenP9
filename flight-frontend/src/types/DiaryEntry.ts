export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Windy = 'windy',
  }
  
  export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor',
  }
  
  export default interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    comment?: string;
    visibility: Visibility;
  }

  export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;