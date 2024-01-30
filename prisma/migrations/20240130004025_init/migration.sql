-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "team1" TEXT NOT NULL,
    "team2" TEXT NOT NULL,
    "dateCreation" TEXT NOT NULL,
    "dateGame" TEXT NOT NULL,
    "winner" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
