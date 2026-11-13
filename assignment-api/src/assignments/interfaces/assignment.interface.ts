export interface Assignment {
  id: string;
  studentId: string;
  courseName: string;
  deadline: string;
  submittedAt: string | null;
}

export enum AssignmentStatus {
  NOT_SUBMITTED = 'NOT_SUBMITTED',
  SUBMITTED = 'SUBMITTED',
  LATE = 'LATE',
  OVERDUE = 'OVERDUE',
}
