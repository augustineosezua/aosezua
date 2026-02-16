/*
  Warnings:

  - A unique constraint covering the columns `[userCode]` on the table `Status` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Status_userCode_key" ON "Status"("userCode");
