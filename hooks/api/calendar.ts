import qs from 'qs';
import client from './client';

export interface ListCalendarPayload {
  month?: number;
  year?: number;
}

export async function getListCalendar(payload: ListCalendarPayload) {
  const queryString = qs.stringify(payload);
  const response = await client.get<CalendarType[]>(`/calendar?${queryString}`);
  return response.data;
}
