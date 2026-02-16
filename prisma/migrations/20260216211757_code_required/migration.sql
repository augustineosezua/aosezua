/*
  Warnings:

  - Made the column `userCode` on table `Status` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Status" ALTER COLUMN "userCode" SET NOT NULL;
