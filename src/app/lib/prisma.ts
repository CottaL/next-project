import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../generated/prisma/client";
import bcrypt from "bcrypt";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter }).$extends({
  query: {
    user: {
      $allOperations({ operation, args, query }) {
        if (["create", "update"].includes(operation) && args.data["password"]) {
          args.data["password"] = bcrypt.hashSync(args.data["password"], 10);
        }
        return query(args);
      },
    },
  },
});

export { prisma };
