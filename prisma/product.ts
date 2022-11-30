import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const getRandom = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const productData: Prisma.productsCreateInput[] = Array.apply(
  null,
  Array(10)
).map((_, index) => ({
  name: `Sneakers ${index + 1}`,
  contents:
    '{"blocks":[{"key":"fngrr","text":"This is a Sneakers!!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":10,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
  category_id: 1,
  image_url:
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220304_142%2F1646370635622XhtWM_JPEG%2F47506415345958254_1940472648.jpeg&type=a340',
  price: getRandom(30000, 10000),
}));

async function main() {
  await prisma.products.deleteMany({});

  for (const p of productData) {
    const product = await prisma.products.create({
      data: p,
    });
    console.log(`Create id: ${product.id}`);
  }
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
