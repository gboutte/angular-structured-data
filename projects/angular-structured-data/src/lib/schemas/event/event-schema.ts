import { Schema } from '../../schema';
import { OfferSchema } from '../offer-schema';
import { AttendanceModeSchema } from './attendance-mode/attendance-mode-schema';

export class EventSchema extends Schema {
  name: string = '';
  description: string = '';
  image_url: string = '';
  startDate: Date = new Date();
  endDate: Date | null = null;
  eventStatus:
    | 'Scheduled'
    | 'Cancelled'
    | 'Postponed'
    | 'MovedOnline'
    | 'None' = 'None';

  attendanceMode: AttendanceModeSchema | null = null;

  perfomer_name: string = '';
  perfomer_type:
    | 'Person'
    | 'PerformingGroup'
    | 'MusicGroup'
    | 'DanceGroup'
    | 'TheaterGroup' = 'Person';

  offers: OfferSchema[] = [];

  constructor() {
    super();
    this.addProperty('@type', 'Event');
  }

  build() {
    this.addProperty('name', this.name);

    if (this.perfomer_name.length > 0) {
      this.addProperty('performer', {
        '@type': this.perfomer_type,
        name: this.perfomer_name,
      });
    }

    this.addProperty('startDate', this.startDate.toISOString());
    if (this.endDate) {
      this.addProperty('endDate', this.endDate.toISOString());
    }
    if (this.eventStatus !== 'None') {
      this.addProperty('eventStatus', this.eventStatus);
    }

    if (this.image_url.length > 0) {
      this.addProperty('image', this.image_url);
    }
    if (this.description.length > 0) {
      this.addProperty('description', this.description);
    }

    if (this.attendanceMode) {
      this.addProperty(
        'eventAttendanceMode',
        this.attendanceMode.getEventAttendanceModeUrl(),
      );

      this.attendanceMode.build();
      const attendanceData = this.attendanceMode.getData();
      for (const key in attendanceData) {
        this.addProperty(key, attendanceData[key]);
      }
    }

    if (this.offers.length > 0) {
      this.addProperty(
        'offers',
        this.offers.map((offer) => {
          offer.build();
          return offer.getData();
        }),
      );
    }
  }
}
