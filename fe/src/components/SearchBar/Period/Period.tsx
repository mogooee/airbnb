import React from 'react';
import SearchSection from 'components/common/Section';
import { PeriodType, SectionProps } from 'components/SearchBar/types';

export default function Period({ info, search }: SectionProps<PeriodType>) {
  const { checkIn, checkOut } = search;
  const [checkInTitle, checkOutTitle] = info.title;

  return (
    <>
      <SearchSection title={checkInTitle} value={checkIn || info.defaultValue} />
      <SearchSection title={checkOutTitle} value={checkOut || info.defaultValue} />
    </>
  );
}
