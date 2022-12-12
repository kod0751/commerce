import { products } from '@prisma/client';
import styled from '@emotion/styled';
import { Button } from '@mantine/core';
import { IconRefresh, IconX } from '@tabler/icons';
import { useQuery } from '@tanstack/react-query';
import { CountControl } from 'components/CountControl';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { CATEGORY_MAP } from 'constants/products';

interface CartItem {
  name: string;
  productId: number;
  price: number;
  quantity: number;
  amount: number;
  image_url: string;
}

export default function Cart() {
  const router = useRouter();
  const [data, setData] = useState<CartItem[]>([]);

  const dilveryAmount = 5000;
  const discountAmount = 0;

  const amount = useMemo(() => {
    return data
      .map((item) => item.amount)
      .reduce((prev, curr) => prev + curr, 0);
  }, [data]);

  useEffect(() => {
    const mockData = [
      {
        name: '멋드러진 신발',
        productId: 53,
        price: 20000,
        quantity: 2,
        amount: 40000,
        image_url:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220925_100%2F1664070136497imIlj_JPEG%2F65205970317930798_1684824693.jpeg&type=a340',
      },
      {
        name: '느낌있는 후드',
        productId: 93,
        price: 42800,
        quantity: 1,
        amount: 42800,
        image_url:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220918_162%2F1663454931042AipB5_JPEG%2F64590764841458596_569392890.jpeg&type=a340',
      },
    ];

    setData(mockData);
  }, []);

  const { data: products } = useQuery<
    { items: products[] },
    unknown,
    products[]
  >(
    [`/api/get-products?skip=0&take=3`],
    () => fetch(`/api/get-products?skip=0&take=3`).then((res) => res.json()),
    {
      select: (data) => data.items,
    }
  );

  return (
    <div>
      <span className="text-2xl mb-3">Cart ({data.length})</span>
      <div className="flex">
        <div className="flex flex-col p-4 space-y-4 flex-1">
          {data?.length > 0 ? (
            data.map((item, idx) => <Item key={idx} {...item} />)
          ) : (
            <div>장바구니에 아무것도 없습니다.</div>
          )}
        </div>
        <div className="px-4">
          <div
            className="flex flex-col p-4 space-y-4"
            style={{ minWidth: 300, border: '1px solid grey' }}
          >
            <div>Info</div>
            <Row>
              <span>금액</span>
              <span>{amount.toLocaleString('ko-kr')} 원</span>
            </Row>
            <Row>
              <span>배송비</span>
              <span>{dilveryAmount.toLocaleString('ko-kr')} 원</span>
            </Row>
            <Row>
              <span>할인 금액</span>
              <span>{discountAmount.toLocaleString('ko-kr')} 원</span>
            </Row>
            <Row>
              <span className="font-semibold">결제 금액</span>
              <span className="font-semibold text-red-500">
                {(amount + dilveryAmount - discountAmount).toLocaleString(
                  'ko-kr'
                )}{' '}
                원
              </span>
            </Row>

            <Button
              style={{ backgroundColor: 'black' }}
              radius="xl"
              size="md"
              styles={{
                root: { height: 48 },
              }}
              onClick={() => {}}
            >
              구매하기
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <p>추천상품</p>
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
    </div>
  );
}

const Item = (props: CartItem) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState<number | undefined>(props.quantity);
  const [amount, setAmount] = useState<number>(props.quantity);

  useEffect(() => {
    if (quantity != null) {
      setAmount(quantity * props.price);
    }
  }, [quantity, props.price]);

  const handleUpdate = () => {
    alert('목록 수정');
  };

  const handleDelete = () => {
    alert('목록 삭제');
  };

  return (
    <div className="w-full flex p-4" style={{ borderBottom: '1px solid grey' }}>
      <Image
        src={props.image_url}
        width={155}
        height={195}
        alt={props.name}
        onClick={() => router.push(`/products/${props.productId}`)}
      />
      <div className="flex flex-col ml-4">
        <span className="font-semibold mb-2 ">{props.name}</span>
        <span className="mb-auto">
          가격:{props.price.toLocaleString('ko-kr')} 원
        </span>
        <div className="flex items-center space-x-4">
          <CountControl value={quantity} setValue={setQuantity} max={20} />
          <IconRefresh onClick={handleUpdate} />
        </div>
      </div>
      <div className="flex ml-auto space-x-4">
        <span>{amount.toLocaleString('ko-kr')} 원</span>
        <IconX onClick={handleDelete} />
      </div>
    </div>
  );
};

const Row = styled.div`
  display: flex;
  * ~ * {
    margin-left: auto;
  }
`;
