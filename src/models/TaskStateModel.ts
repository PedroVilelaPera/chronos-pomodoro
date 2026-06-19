import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; //POde ser de 1 à 8.
  config: {
    worktTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
