'use client';

import React from 'react';

import { ThemeProvider } from '@/shared/lib/theme/theme-provider';

interface IProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
