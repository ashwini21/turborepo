import { pgTable, serial, text, boolean } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const tasks = pgTable("tasks", {
	id: serial().primaryKey().notNull(),
	name: text().notNull(),
	done: boolean().default(false),
});
