export interface Expense {
  id: number;
  description: string;
  amount: number | undefined;
  date: Date | undefined;
  category: string;
}
