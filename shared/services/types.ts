export type Shedule = {
  shedule_id: string;
  start_time: string;
  end_time: string;
  subjects_ids: string[];
};

export type Subject = {
  subject_id: string;
  name: string;
  teacher: string;
  classroom: string;
  color: string;
  emoji: string;
  day: string;
  start_time: string;
  end_time: string;
  progress: number;
  tasks_ids: string[];
};

export type Task = {
  task_id: string;
  name: string;
  description: string;
  due_date: string;
  subject: Subject;
  status: string;
};
