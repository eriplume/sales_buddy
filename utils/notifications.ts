"use client"
import { showNotification } from '@mantine/notifications';

export function showErrorNotification(message: string) {
  showNotification({
    message,
    color: 'red',
  });
}

export function showSuccessNotification(message: string) {
  showNotification({
    message,
  });
}