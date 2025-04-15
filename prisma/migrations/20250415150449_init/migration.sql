-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "neighborhood" VARCHAR(100) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "new" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT NOT NULL,
    "image_url" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "passwordHash" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
