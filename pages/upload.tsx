import Button from 'components/Button';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export default function uploadPage() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div>
      <div>
        <label className="block mb-8">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-700">
            상품명
          </span>
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="ex)청바지"
          />
        </label>
        <label className="block mb-8">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-700">
            이미지
          </span>
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="ex)https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210804_210%2F1628065665216XKFcY_JPEG%2F210804_610a4f76c15e7-1.jpg&type=a340"
          />
        </label>
        <label className="block mb-8">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-700">
            가격
          </span>
          <input
            type="number"
            name="nubmer"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="ex)17000"
          />
        </label>
        <label className="block mb-8">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-700">
            카테고리
          </span>
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="ex)후드"
          />
        </label>
        <label className="block mb-8">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-slate-700">
            상품 정보
          </span>
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="ex) 색감이 이쁘게 나온 청바지입니다!"
          />
        </label>
      </div>
      <Button
        onClick={() => {
          if (session == null) {
            alert('로그인이 필요합니다');
            router.push('/auth/login');
            return;
          }
          validate('cart');
        }}
      >
        상품 등록하기
      </Button>
    </div>
  );
}
