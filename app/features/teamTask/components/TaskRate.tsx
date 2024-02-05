"use client"
import { Task } from "@/types";
import { Rating } from "@mantine/core"

type TaskRateProps = {
  task: Task; 
}

export default function TaskRate({ task }: TaskRateProps) {
  const taskColorClass = task.isGroupTask ? '#93c5fd' : '#0369a1';

  return (
    <Rating size="sm" count={3} color={taskColorClass} value={task.importance} readOnly/>
  )
}
