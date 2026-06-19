import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // Armazena a data se a tarefa foi concluída, ou seja, o timer chegou até o final.
  interruptDate: number | null; // Armazena a data se a tarefa foi interrompida, ou seja, o usuário parou o timer.
  type: keyof TaskStateModel['config'];
};
