import { AttendanceModeSchema } from './attendance-mode-schema';

export class OnlineEventAttendanceModeSchema extends AttendanceModeSchema {
  url: string = '';
  constructor() {
    super();
  }

  build() {
    this.addProperty('location', {
      '@type': 'VirtualLocation',
      url: this.url,
    });
  }

  getEventAttendanceModeUrl(): string {
    return '';
  }
}
