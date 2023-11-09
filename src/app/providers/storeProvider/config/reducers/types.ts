export interface ICard {
  id: number;
  date: string;
  importance: ImportanceType;
  equipment: string;
  message: string;
  responsible: string;
  isRead: boolean;
}

export type ImportanceType = "Высокая" | "Критическая" | "Низкая";
