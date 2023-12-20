"use client"
import { showNotification } from '@mantine/notifications';

export function showErrorNotification(message: string, title?: string) {
  showNotification({
    title,
    message,
    color: 'red',
  });
}

export function showSuccessNotification(message: string, title?: string) {
  showNotification({
    title,
    message,
  });
}