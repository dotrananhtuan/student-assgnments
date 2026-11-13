import { Injectable } from '@nestjs/common';
import {
  Assignment,
  AssignmentStatus,
} from './interfaces/assignment.interface';

@Injectable()
export class AssignmentsService {
  private readonly currentStudentId = 'S01';
  private readonly mockCurrentTime = new Date('2026-11-11T09:00:00+07:00');
  private readonly assignments: Assignment[] = [
    {
      id: 'A01',
      studentId: 'S01',
      courseName: 'Foundation U1 – Reading',
      deadline: '2026-11-13T23:59:00+07:00',
      submittedAt: null,
    },
    {
      id: 'A02',
      studentId: 'S01',
      courseName: 'Foundation U2 – Listening',
      deadline: '2026-11-09T23:59:00+07:00',
      submittedAt: null,
    },
    {
      id: 'A03',
      studentId: 'S01',
      courseName: 'Foundation U3 – Writing',
      deadline: '2026-11-10T23:59:00+07:00',
      submittedAt: '2026-11-10T20:00:00+07:00',
    },
    {
      id: 'A04',
      studentId: 'S01',
      courseName: 'Foundation U4 – Speaking',
      deadline: '2026-11-08T23:59:00+07:00',
      submittedAt: '2026-11-10T12:00:00+07:00',
    },
    {
      id: 'B01',
      studentId: 'S02',
      courseName: 'Foundation U1 – Reading',
      deadline: '2026-11-13T23:59:00+07:00',
      submittedAt: null,
    },
  ];

  private resolveStatus(assignment: Assignment): AssignmentStatus[] {
    const deadlineDate = new Date(assignment.deadline);

    // Chưa nộp bài
    if (!assignment.submittedAt) {
      return [
        this.mockCurrentTime > deadlineDate
          ? AssignmentStatus.OVERDUE
          : AssignmentStatus.NOT_SUBMITTED,
      ];
    }

    // Đã nộp bài
    const submittedDate = new Date(assignment.submittedAt);

    if (submittedDate > deadlineDate) {
      return [AssignmentStatus.SUBMITTED, AssignmentStatus.LATE];
    }

    return [AssignmentStatus.SUBMITTED];
  }

  getAll(): Assignment[] {
    return this.assignments;
  }

  getMyAssignments(): any[] {
    return this.assignments
      .filter((assignment) => assignment.studentId === this.currentStudentId)
      .map((assignment) => {
        return {
          // Gộp courseName, unit và title lại thành định dạng cũ
          title: assignment.courseName,
          deadline: assignment.deadline,
          submittedAt: assignment.submittedAt,
          status: this.resolveStatus(assignment),
        };
      });
  }
}
