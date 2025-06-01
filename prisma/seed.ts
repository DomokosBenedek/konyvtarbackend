import { books, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();
async function main() {
    const bookList: books[] = await prisma.books.findMany();
    if (bookList.length < 15){
        console.log("Nincs elég könyv");
        return;
    }

    const randomBooksId = faker.helpers.shuffle(bookList).slice(0, 15);

    for (let i = 0; i < randomBooksId.length; i++) {
        await prisma.rentals.create({
            data: {
                book_id: randomBooksId[i].id,
                start_date: faker.date.past(),
                end_date: faker.date.future(),
            },
        });
    }
};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })