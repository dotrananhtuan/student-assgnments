export enum AssignmentStatus {
  NOT_SUBMITTED = 'NOT_SUBMITTED',
  OVERDUE = 'OVERDUE',
  SUBMITTED = 'SUBMITTED',
  LATE = 'LATE',
}

export interface StudentAssignment {
  title: string;
  deadline: string;
  submittedAt: string | null;
  status: AssignmentStatus[];
}

export const STATUS_CONFIG: Record<AssignmentStatus, { label: string; badgeClass: string }> = {
  [AssignmentStatus.NOT_SUBMITTED]: {
    label: AssignmentStatus.NOT_SUBMITTED,
    badgeClass: 'bg-blue-600 text-white font-medium',
  },
  [AssignmentStatus.OVERDUE]: {
    label: AssignmentStatus.OVERDUE,
    badgeClass: 'bg-red-600 text-white font-medium',
  },
  [AssignmentStatus.SUBMITTED]: {
    label: AssignmentStatus.SUBMITTED,
    badgeClass: 'bg-emerald-600 text-white font-medium',
  },
  [AssignmentStatus.LATE]: {
    label: AssignmentStatus.LATE,
    badgeClass: 'bg-amber-600 text-white font-medium',
  },
};
