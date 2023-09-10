/*
  Warnings:

  - You are about to drop the `CarDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarPosts` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "CarDetail" DROP CONSTRAINT "fk_carDetail_boitedevitesse";

-- DropForeignKey
ALTER TABLE "CarDetail" DROP CONSTRAINT "fk_carDetail_couleurexterieur";

-- DropForeignKey
ALTER TABLE "CarDetail" DROP CONSTRAINT "fk_carDetail_critair";

-- DropForeignKey
ALTER TABLE "CarDetail" DROP CONSTRAINT "fk_carDetail_emissionco2";

-- DropForeignKey
ALTER TABLE "CarDetail" DROP CONSTRAINT "fk_carDetail_energie";

-- DropForeignKey
ALTER TABLE "CarDetail" DROP CONSTRAINT "fk_carDetail_normeeuro";

-- DropForeignKey
ALTER TABLE "CarDetail" DROP CONSTRAINT "fk_carDetail_provenance";

-- DropForeignKey
ALTER TABLE "CarDetail" DROP CONSTRAINT "fk_carDetail_sellerie";

-- DropForeignKey
ALTER TABLE "CarPosts" DROP CONSTRAINT "CarPosts_carDetailId_fkey";

-- DropForeignKey
ALTER TABLE "CarPosts" DROP CONSTRAINT "CarPosts_userId_fkey";

-- DropTable
DROP TABLE "CarDetail";

-- DropTable
DROP TABLE "CarPosts";

-- CreateTable
CREATE TABLE "carPosts" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "price" INTEGER,
    "imageUrl" TEXT,
    "km" INTEGER,
    "year" INTEGER,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT DEFAULT 'hors ligne',
    "userId" INTEGER,
    "carDetailsId" INTEGER,

    CONSTRAINT "carPosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carDetails" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER,
    "provenanceId" INTEGER,
    "dateMiseEnCirculation" DATE,
    "controleTechnique" BOOLEAN,
    "premiereMain" BOOLEAN,
    "energieId" INTEGER,
    "boiteDeVitesseId" INTEGER,
    "couleurExterieurId" INTEGER,
    "sellerieId" INTEGER,
    "nbPortes" INTEGER,
    "nbPlaces" INTEGER,
    "volumeCoffre" INTEGER,
    "puissanceFiscale" INTEGER,
    "puissanceDin" INTEGER,
    "normeEuroId" INTEGER,
    "critAirId" INTEGER,
    "consommationMixte" DOUBLE PRECISION,
    "emissionCo2Id" INTEGER,

    CONSTRAINT "carDetails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "carPosts" ADD CONSTRAINT "carPosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "carPosts" ADD CONSTRAINT "carPosts_carDetailsId_fkey" FOREIGN KEY ("carDetailsId") REFERENCES "carDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carDetails" ADD CONSTRAINT "fk_carDetails_boitedevitesse" FOREIGN KEY ("boiteDeVitesseId") REFERENCES "GearBox"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "carDetails" ADD CONSTRAINT "fk_carDetails_couleurexterieur" FOREIGN KEY ("couleurExterieurId") REFERENCES "ExteriorColor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "carDetails" ADD CONSTRAINT "fk_carDetails_critair" FOREIGN KEY ("critAirId") REFERENCES "CritAir"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "carDetails" ADD CONSTRAINT "fk_carDetails_emissionco2" FOREIGN KEY ("emissionCo2Id") REFERENCES "EmissionCo2"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "carDetails" ADD CONSTRAINT "fk_carDetails_energie" FOREIGN KEY ("energieId") REFERENCES "Energy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "carDetails" ADD CONSTRAINT "fk_carDetails_normeeuro" FOREIGN KEY ("normeEuroId") REFERENCES "EuroStandard"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "carDetails" ADD CONSTRAINT "fk_carDetails_provenance" FOREIGN KEY ("provenanceId") REFERENCES "Origin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "carDetails" ADD CONSTRAINT "fk_carDetails_sellerie" FOREIGN KEY ("sellerieId") REFERENCES "Upholstery"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
