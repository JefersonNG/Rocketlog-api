/*
  Warnings:

  - You are about to drop the column `status` on the `delivery_logs` table. All the data in the column will be lost.
  - Added the required column `description` to the `delivery_logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deliveries" ADD COLUMN     "status" "DeliveryStatus" NOT NULL DEFAULT 'processing';

-- AlterTable
ALTER TABLE "delivery_logs" DROP COLUMN "status",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3);
