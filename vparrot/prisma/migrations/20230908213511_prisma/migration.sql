-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "firstname" TEXT,
    "lastname" TEXT,
    "role" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "providerType" TEXT,
    "providerId" TEXT,
    "providerAccountId" TEXT,
    "refreshToken" TEXT,
    "accessToken" TEXT,
    "accessTokenExpires" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "expires" TIMESTAMP(3),
    "sessionToken" TEXT,
    "accessToken" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarPosts" (
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
    "carDetailId" INTEGER,

    CONSTRAINT "CarPosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarDetail" (
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

    CONSTRAINT "CarDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testimonials" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "rating" INTEGER,
    "message" TEXT,
    "isValidated" BOOLEAN DEFAULT false,
    "status" TEXT DEFAULT 'hors ligne',
    "email" TEXT,

    CONSTRAINT "testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GearBox" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "GearBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CritAir" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "CritAir_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmissionCo2" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "EmissionCo2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Energy" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Energy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EuroStandard" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "EuroStandard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExteriorColor" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "ExteriorColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Origin" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Origin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Upholstery" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Upholstery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarPosts" ADD CONSTRAINT "CarPosts_carDetailId_fkey" FOREIGN KEY ("carDetailId") REFERENCES "CarDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarPosts" ADD CONSTRAINT "carPosts_user" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarDetail" ADD CONSTRAINT "fk_carDetail_boitedevitesse" FOREIGN KEY ("boiteDeVitesseId") REFERENCES "GearBox"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarDetail" ADD CONSTRAINT "fk_carDetail_couleurexterieur" FOREIGN KEY ("couleurExterieurId") REFERENCES "ExteriorColor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarDetail" ADD CONSTRAINT "fk_carDetail_critair" FOREIGN KEY ("critAirId") REFERENCES "CritAir"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarDetail" ADD CONSTRAINT "fk_carDetail_emissionco2" FOREIGN KEY ("emissionCo2Id") REFERENCES "EmissionCo2"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarDetail" ADD CONSTRAINT "fk_carDetail_energie" FOREIGN KEY ("energieId") REFERENCES "Energy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarDetail" ADD CONSTRAINT "fk_carDetail_normeeuro" FOREIGN KEY ("normeEuroId") REFERENCES "EuroStandard"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarDetail" ADD CONSTRAINT "fk_carDetail_provenance" FOREIGN KEY ("provenanceId") REFERENCES "Origin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CarDetail" ADD CONSTRAINT "fk_carDetail_sellerie" FOREIGN KEY ("sellerieId") REFERENCES "Upholstery"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
