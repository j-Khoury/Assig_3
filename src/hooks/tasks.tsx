// hooks/tasks.ts
'use client'

import { useState } from 'react';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

// Custom hook for adding tasks
export function useTaskAddition(initialTasks: Task[]) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  
  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  return { tasks, addTask };
}

// Custom hook for marking tasks as complete
export function useTaskCompletion(initialTasks: Task[]) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const completeTask = (taskId: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return { tasks, completeTask };
}
