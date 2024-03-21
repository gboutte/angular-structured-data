import { Schema } from '../../../schema';

export abstract class AttendanceModeSchema extends Schema {
  constructor() {
    super(false);
  }

  abstract getEventAttendanceModeUrl(): string;
}
