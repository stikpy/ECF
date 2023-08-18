-- CreateTable
CREATE TABLE "cars" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "imageurl" TEXT,
    "description" TEXT,
    "price" INTEGER,
    "slug" VARCHAR(255),

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testimonial" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "date" DATE,
    "rating" INTEGER,
    "message" VARCHAR(255),

    CONSTRAINT "testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cars_slug_key" ON "cars"("slug");
