import React from 'react';
import Image from 'next/image';
import HomeButton from '@/app/components/home-button';

export default function Home() {
  return (
    <main>
      <div className="ml-auto mr-auto mt-52 max-w-3xl">
        <HomeButton>
          <Image
            className="pt-3 pb-3 mx-auto bg-gray-900 rounded hover:bg-gray-800 active:bg-gray-950"
            width={768}
            height={224}
            src="/icons/logo.svg"
            alt="logo"
          />
        </HomeButton>
      </div>
    </main>
  );
}