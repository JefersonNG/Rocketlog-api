/*
  Warnings:

  - You are about to drop the column `status` on the `deliveries` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `delivery_logs` table. All the data in the column will be lost.
  - Added the required column `description` to the `deliveries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "status",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "delivery_logs" DROP COLUMN "description",
ADD COLUMN     "status" "DeliveryStatus" NOT NULL DEFAULT 'processing';
