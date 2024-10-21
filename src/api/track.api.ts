import { api } from './api';
import { ResponseType } from '~/types';
import { message } from "antd";
import { ResponseStatus } from '~/types';

export const createTrack = async (isrc: string): Promise<any> => {
  const auth = localStorage.getItem('auth');
  const response: ResponseType = await api.post('codechallenge/createTrack', null, { params: {isrc}, headers:{ Authorization: `Basic ${auth}`} });
  if (response?.status === ResponseStatus.SUCCESS) {
    message.success('Track created successfully');
    return true;
  }
  else if (response?.status === ResponseStatus.ALREADY) {
    message.warning('Track is already created');
    return true;
  } else {
    message.error('Track creation failed');
    return false;
  }
};

export const getTrackMetadata = async (isrc: string): Promise<any> => {
  const auth = localStorage.getItem('auth');
  const response: ResponseType = await api.get('codechallenge/getTrackMetadata', { params: {isrc}, headers:{ Authorization:  `Basic ${auth}`} });
  if (response?.status === ResponseStatus.NOT_FOUND) message.error('Track not found');
  return response?.data?.track;
};

export const getCover = async (isrc: string): Promise<any> => {
  const auth = localStorage.getItem('auth');
  const response: ResponseType = await api.get('codechallenge/getCover', { params: {isrc}, headers:{ Authorization:  `Basic ${auth}`} });
  if (response?.status === ResponseStatus.NOT_FOUND) message.error('Cover image not found');
  return response?.data?.album;
};

