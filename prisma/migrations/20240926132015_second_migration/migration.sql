-- CreateTable
CREATE TABLE "UserRegister" (
    "_id" UUID NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT,

    CONSTRAINT "UserRegister_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRegister_userName_key" ON "UserRegister"("userName");
