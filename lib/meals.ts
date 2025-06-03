import sql from 'better-sqlite3';
import { MealItems } from '@/type/meal';

const db = sql('meals.db');

export async function getMeals(): Promise<MealItems[]> {
  return db.prepare('SELECT * FROM meals').all() as MealItems[];
}
