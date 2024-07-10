'use client';

import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

export default function HomeButton({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (<Button
    onClick={() =>
      router.push(`/dashboard`, { scroll: false })
    }
  >
    {children}
  </Button>);
}