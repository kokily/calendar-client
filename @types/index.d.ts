interface CalendarType {
  id: string;
  body: string;
  date: Date;
  time: TimeType;
  created_at: Date;
}

type TimeType = '11:30' | '13:00' | '14:30' | '16:00' | '17:30';
