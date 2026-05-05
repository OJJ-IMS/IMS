import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create demo organisation
  const org = await prisma.organisation.upsert({
    where: { slug: "demo-contractor" },
    update: {},
    create: {
      name: "Demo Rail Contractor Ltd",
      slug: "demo-contractor",
      industry: "Rail & Telecoms",
      size: "25-100",
      address: "53 Ullswater Crescent, Coulsdon, CR5 2HR",
      phone: "02039099888",
    },
  });

  const hashedPassword = await bcrypt.hash("demo1234!", 12);

  // Admin user
  await prisma.user.upsert({
    where: { email: "admin@demo.co.uk" },
    update: {},
    create: {
      email: "admin@demo.co.uk",
      password: hashedPassword,
      name: "Ollie Clayton",
      role: "ADMIN",
      jobTitle: "Director of Client Relations",
      organisationId: org.id,
    },
  });

  // HSQE manager
  await prisma.user.upsert({
    where: { email: "hsqe@demo.co.uk" },
    update: {},
    create: {
      email: "hsqe@demo.co.uk",
      password: hashedPassword,
      name: "Helen Ward",
      role: "HSQE_MANAGER",
      jobTitle: "HSQE Manager",
      organisationId: org.id,
    },
  });

  // Site supervisor
  await prisma.user.upsert({
    where: { email: "supervisor@demo.co.uk" },
    update: {},
    create: {
      email: "supervisor@demo.co.uk",
      password: hashedPassword,
      name: "John Billings",
      role: "SUPERVISOR",
      jobTitle: "Site Supervisor",
      organisationId: org.id,
    },
  });

  console.log("✅ Seed complete");
  console.log("Demo credentials:");
  console.log("  Admin:      admin@demo.co.uk / demo1234!");
  console.log("  HSQE:       hsqe@demo.co.uk  / demo1234!");
  console.log("  Supervisor: supervisor@demo.co.uk / demo1234!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
