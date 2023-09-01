import Button from 'components/Button';
import Image from 'next/image';
import React from 'react';

export default function uploadPage() {
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
      <Button>상품 등록하기</Button>
    </div>
  );
}
