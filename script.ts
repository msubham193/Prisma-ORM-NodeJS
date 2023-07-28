import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({

  //     data: {

  //       name: 'Subham',

  //       email: 'subham193@gmail.com',
  //       posts:{
  //         create:{
  //             title:"This is the Demo title for Subham Mishra"
  //         }
  //       }

  //     },

  //   })

  //   console.log(user)

  const userwithpost = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  console.log(userwithpost, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
