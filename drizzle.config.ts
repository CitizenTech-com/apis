import { defineConfig } from "drizzle-kit";
const databaseUrl =
  "postgresql://admin:4e2w3zI65993MeIJX6g9IjVG@intensely-stable-oyster.a1.pgedge.io/citi_db?sslmode=require"
export default defineConfig({
  schema: "./src/db/schema/**/*.{js,ts}",
  out: "./src/db/migrations",
  dialect: "postgresql", // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: databaseUrl,
  },
  migrations: {
    table: "migrations",
    schema: "public",
  },
});