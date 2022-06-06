import { Dispatch } from 'react';

export type PeriodType = {
  checkIn?: number;
  checkOut?: number;
};

export type PriceType = {
  minPrice?: number;
  maxPrice?: number;
};

export type PersonnelType = {
  adult?: number;
  teenager?: number;
  child?: number;
};

export interface InfoType {
  title: string & string[];
  defaultValue: string;
  value?: object;
}

export interface ModalProps<T> {
  search: T;
  addSearch: Dispatch<any>;
}

export interface SectionProps<T> {
  info: InfoType;
  search: T;
}
