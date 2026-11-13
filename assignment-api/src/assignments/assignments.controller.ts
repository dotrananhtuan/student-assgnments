import { Controller, Get } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { Assignment } from './interfaces/assignment.interface';

@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  // @Get()
  // getAll(): Assignment[] {
  //   return this.assignmentsService.getAll();
  // }

  @Get('my-assignments')
  async getMyAssignments() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return this.assignmentsService.getMyAssignments();
  }
}
