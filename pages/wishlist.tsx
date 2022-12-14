import { products } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { CATEGORY_MAP } from 'constants/products';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Wishlist() {
  const router = useRouter();

  const { data: products } = useQuery<
    { items: products[] },
    unknown,
    products[]
  >(
    ['/api/get-wishlists'],
    () => fetch('/api/get-wishlists').then((res) => res.json()),
    {
      select: (data) => data.items,
    }
  );
  return (
    <div>
      <p className="text-2xl mb-4">내가 찜한 상품</p>
      {products && (
        <div className="grid grid-cols-3 gap-5">
          {products.map((item) => (
            <div
              key={item.id}
              style={{ maxWidth: 390 }}
              onClick={() => router.push(`/products/${item.id}`)}
            >
              <Image
                className="rounded"
                alt={item.name}
                src={item.image_url ?? ''}
                width={320}
                height={340}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM0rQcAAO8Atr9XcaAAAAAASUVORK5CYII="
              />
              <div className="flex">
                <span>{item.name}</span>
                <span className="ml-auto">
                  {item.price.toLocaleString('ko-KR')}원
                </span>
              </div>
              <span className="text-zinc-400">
                {CATEGORY_MAP[item.category_id - 1]}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
