import { prisma } from "../utils/db";

async function getData() {
  const data = await prisma.BlogPost.findMany({ select: { title: true, content: true, imageUrl: true, id: true, createdAt: true } });
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <h4>Simple Test</h4>

      {
        data.map((el) => {
          return (
            <h4>{el.title}</h4>
          )
        })
      }
    </>
  );
}
