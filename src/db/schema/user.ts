import { pgTable, varchar, text, serial, timestamp} from "drizzle-orm/pg-core";


// Define the user table
export const users = pgTable("users", {
  id: serial('id').primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  phone: varchar("phone", { length: 30 }).notNull().unique(),
  address: text("address").notNull(),
  postCode: varchar("post_code", { length: 10 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

