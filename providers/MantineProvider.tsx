"use client";
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

type Props = {
  children?: React.ReactNode;
};

export const MantineProviderWrapper = ({ children }: Props) => {
  return (
    <MantineProvider>
      <Notifications />
      <ColorSchemeScript />
      {children}
    </MantineProvider>
  );
};