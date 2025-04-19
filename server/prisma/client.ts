import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

async function addTestUser() {
  const existing = await prisma.user.findUnique({
    where: { email: "test@example.com" },
  });

  if (!existing) {
    const user = await prisma.user.create({
      data: {
        email: "test@example.com",
        password: "123456",
      },
    });

    console.log("✅ Test user created:", user);
  } else {
    console.log("⚠️ Test user already exists.");
  }
}

addTestUser();
