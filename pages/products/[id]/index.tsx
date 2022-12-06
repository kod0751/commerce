import { Button } from '@mantine/core';
import { products } from '@prisma/client';
import { IconHeart, IconHeartbeat } from '@tabler/icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import CustomEditor from 'components/Editor';
import { CATEGORY_MAP } from 'constants/products';
import { format } from 'date-fns';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { GetServerSidePropsContext } from 'next';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Carousel from 'nuka-carousel';
import { useEffect, useState } from 'react';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const product = await fetch(
    `http://localhost:3000/api/get-product?id=${context.params?.id}`
  )
    .then((res) => res.json())
    .then((data) => data.items);
  return {
    props: {
      product: { ...product, images: [product.image_url, product.image_url] },
    },
  };
}

const WiSHLIST_QUERY_KEY = '/api/get-wishlist';

export default function Products(props: {
  product: products & { images: string[] };
}) {
  const [index, setIndex] = useState(0);
  const { data: session } = useSession();

  const router = useRouter();
  const queryClient = useQueryClient();
  const { id: productId } = router.query;

  const [editorState] = useState<EditorState | undefined>(() =>
    props.product.contents
      ? EditorState.createWithContent(
          convertFromRaw(JSON.parse(props.product.contents))
        )
      : EditorState.createEmpty()
  );

  const { data: wishlist } = useQuery([WiSHLIST_QUERY_KEY], () =>
    fetch(WiSHLIST_QUERY_KEY)
      .then((res) => res.json())
      .then((data) => data.items)
  );

  const { mutate } = useMutation(
    (productId) =>
      fetch('/api/update-wishlist', {
        method: 'POST',
        body: JSON.stringify({
          productId,
        }),
      })
        .then((data) => data.json())
        .then((res) => res.items),
    {
      // onMutate: async (productId) => {},
      onSuccess: () => {
        queryClient.invalidateQueries([WiSHLIST_QUERY_KEY]);
      },
    }
  );

  const product = props.product;

  const isWished =
    wishlist != null && productId != null
      ? wishlist.includes(productId)
      : false;

  return (
    <>
      {product != null && productId != null ? (
        <div className="p-24 flex flex-row">
          <div style={{ maxWidth: 600, marginRight: 52 }}>
            <Carousel
              animation="fade"
              autoplay
              withoutControls
              wrapAround
              speed={10}
              slideIndex={index}
            >
              {product.images.map((url, idx) => (
                <Image
                  key={`${url}-carousel-${idx}`}
                  src={url}
                  alt="image"
                  width={600}
                  height={600}
                  layout="responsive"
                />
              ))}
            </Carousel>
            <div className="flex space-x-4 mt-2">
              {product.images.map((url, idx) => (
                <div key={`${url}-thumb-${idx}`} onClick={() => setIndex(idx)}>
                  <Image src={url} alt="iamge" width={100} height={100} />
                </div>
              ))}
            </div>
            {editorState != null && (
              <CustomEditor editorState={editorState} readOnly />
            )}
          </div>
          <div style={{ maxWidth: 600 }} className="flex flex-col space-y-6">
            <div className="text-lg text-zinc-400">
              {CATEGORY_MAP[product.category_id - 1]}
            </div>
            <div className="text-4xl font-semibold">{product.name}</div>
            <div className="text-lg">
              {product.price.toLocaleString('ko-kr')}원
            </div>
            <>{wishlist}</>
            <Button
              leftIcon={
                isWished ? (
                  <IconHeartbeat size={20} stroke={1.5} />
                ) : (
                  <IconHeart size={20} stroke={1.5} />
                )
              }
              style={{ backgroundColor: isWished ? 'red' : 'grey' }}
              radius="xl"
              size="md"
              styles={{
                root: { paddingRight: 14, height: 48 },
              }}
              onClick={() => {
                if (session == null) {
                  alert('로그인이 필요합니다');
                  router.push('/auth/login');
                  return;
                }
                mutate(String(productId));
              }}
            >
              찜하기
            </Button>
            <div className="text-sm text-zinc-400">
              등록: {format(new Date(product.createdAt), 'yyyy년 M월 d일')}
            </div>
          </div>
        </div>
      ) : (
        <div>로딩중</div>
      )}
    </>
  );
}
