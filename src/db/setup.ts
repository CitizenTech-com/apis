import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgresql://admin:4e2w3zI65993MeIJX6g9IjVG@intensely-stable-oyster.a1.pgedge.io/citi_db?sslmode=require"
export const pool = new Pool({
  connectionString: databaseUrl,
});

export const db = drizzle(pool);
