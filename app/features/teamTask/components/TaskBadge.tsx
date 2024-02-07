"use client"
import { Task } from "@/types";
import useUserStore from "@/store/userStore"
import { Badge } from '@mantine/core';

type TaskBadgeProps = {
  task: Task; 
};

export default function TaskBadge({ task }: TaskBadgeProps) {
  const { id } = useUserStore();

  const badgeColor = task.isGroupTask ? '#93c5fd' : '#0369a1';
  const badgeLabel = task.isGroupTask ? 't' : 'm';
  
  task.isGroupTask || task.id === id
  return  <Badge color={badgeColor} size="xs" className="ml-2">{badgeLabel}</Badge>
}
