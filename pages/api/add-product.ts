import type { NextApiRequest, NextApiResponse } from 'next';
import { products, PrismaClient } from '@prisma/client';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

const prisma = new PrismaClient();

async function addProduct(userId: string, item: Omit<products, 'id'>) {
  try {
    const response = await prisma.products.create({
      data: {
        ...item,
      },
    });

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
  }
}

type Data = {
  items?: any;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await unstable_getServerSession(req, res, authOptions);

  const { item } = JSON.parse(req.body);

  if (session == null) {
    res.status(200).json({ items: [], message: 'no Session' });
    return;
  }
  try {
    const wishlist = await addProduct(String(session.id), item);
    res.status(200).json({ items: wishlist, message: 'Success' });
  } catch (error) {
    res.status(400).json({ message: 'Failed' });
  }
}
