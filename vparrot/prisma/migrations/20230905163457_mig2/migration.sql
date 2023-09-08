/*
  Warnings:

  - You are about to drop the column `imageurl` on the `cars` table. All the data in the column will be lost.
  - You are about to drop the `testimonial` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "cars" DROP COLUMN "imageurl",
ADD COLUMN     "imageURL" TEXT,
ADD COLUMN     "km" INTEGER,
ADD COLUMN     "year" INTEGER;

-- DropTable
DROP TABLE "testimonial";

-- CreateTable
CREATE TABLE "testimonials" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "date" DATE,
    "rating" INTEGER,
    "message" VARCHAR(255),
    "isValidated" BOOLEAN DEFAULT false,
    "status" VARCHAR(20) NOT NULL DEFAULT 'hors ligne',

    CONSTRAINT "testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255),
    "password" VARCHAR(255),
    "firstname" VARCHAR(255),
    "lastname" VARCHAR(255),
    "role" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "voiture_details" (
    "id" SERIAL NOT NULL,
    "car_id" INTEGER,
    "provenance_id" INTEGER,
    "date_mise_en_circulation" DATE,
    "controle_technique" BOOLEAN,
    "premiere_main" BOOLEAN,
    "energie_id" INTEGER,
    "boite_de_vitesse_id" INTEGER,
    "couleur_exterieur_id" INTEGER,
    "sellerie_id" INTEGER,
    "nb_portes" INTEGER,
    "nb_places" INTEGER,
    "volume_coffre" INTEGER,
    "puissance_fiscale" INTEGER,
    "puissance_din" INTEGER,
    "norme_euro_id" INTEGER,
    "crit_air_id" INTEGER,
    "consommation_mixte" DOUBLE PRECISION,
    "emission_co2_id" INTEGER,

    CONSTRAINT "voiture_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Provenance" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Provenance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Energie" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Energie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BoiteDeVitesse" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "BoiteDeVitesse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NormeEuro" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "NormeEuro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CouleurExterieur" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "CouleurExterieur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sellerie" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Sellerie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CritAir" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "CritAir_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmissionCO2" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "EmissionCO2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "voiture_details" ADD CONSTRAINT "voiture_details_provenance_id_fkey" FOREIGN KEY ("provenance_id") REFERENCES "Provenance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voiture_details" ADD CONSTRAINT "voiture_details_energie_id_fkey" FOREIGN KEY ("energie_id") REFERENCES "Energie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voiture_details" ADD CONSTRAINT "voiture_details_boite_de_vitesse_id_fkey" FOREIGN KEY ("boite_de_vitesse_id") REFERENCES "BoiteDeVitesse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voiture_details" ADD CONSTRAINT "voiture_details_couleur_exterieur_id_fkey" FOREIGN KEY ("couleur_exterieur_id") REFERENCES "CouleurExterieur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voiture_details" ADD CONSTRAINT "voiture_details_sellerie_id_fkey" FOREIGN KEY ("sellerie_id") REFERENCES "Sellerie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voiture_details" ADD CONSTRAINT "voiture_details_norme_euro_id_fkey" FOREIGN KEY ("norme_euro_id") REFERENCES "NormeEuro"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voiture_details" ADD CONSTRAINT "voiture_details_crit_air_id_fkey" FOREIGN KEY ("crit_air_id") REFERENCES "CritAir"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voiture_details" ADD CONSTRAINT "voiture_details_emission_co2_id_fkey" FOREIGN KEY ("emission_co2_id") REFERENCES "EmissionCO2"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voiture_details" ADD CONSTRAINT "voiture_details_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
