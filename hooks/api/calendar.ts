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

export interface AddCalendarPayload {
  body: string;
  date: Date;
  time: string;
}

export async function addCalendar(payload: AddCalendarPayload) {
  const response = await client.post<CalendarType>('/calendar', payload);
  return response.data;
}
