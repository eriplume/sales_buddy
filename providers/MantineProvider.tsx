"use client";

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';

type Props = {
  children?: React.ReactNode;
};

export const MantineProviderWrapper = ({ children }: Props) => {
  return (
    <MantineProvider>
      <ColorSchemeScript />
      {children}
    </MantineProvider>
  );
};