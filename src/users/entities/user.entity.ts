import { Prisma } from "@prisma/client";

export class User {
    logged: boolean;
    name: string;
    email: string;
}
