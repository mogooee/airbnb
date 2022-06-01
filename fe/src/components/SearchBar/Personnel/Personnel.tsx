import React from 'react';
import SearchSection from 'components/SearchBar/SearchSection/SearchSection';
import { SectionProps } from 'components/SearchBar/types';

export default function Personnel({ search, addSearch }: SectionProps) {
  const { title, defaultValue, value } = search;
  const { adult, teenager } = value;
  const guest = (adult || 0) + (teenager || 0);

  return <SearchSection title={title as string} value={guest || defaultValue} />;
}
