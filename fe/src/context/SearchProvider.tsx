import React, { useContext, createContext, useReducer, Dispatch } from 'react';
import { PeriodType, PriceType, PersonnelType } from 'components/SearchBar/types';

interface SearchType {
  period: PeriodType;
  price: PriceType;
  personnel: PersonnelType;
}

type ActionType =
  | {
    type: 'SET_PERIOD';
    value: PeriodType;
  }
  | {
    type: 'SET_PRICE';
    value: PriceType;
  }
  | {
    type: 'SET_PERSONNEL';
    value: PersonnelType;
  }
  | {
    type: 'INIT_VALUE';
    value: string;
  };

function searchReducer(searches: SearchType, action: ActionType): SearchType {
  const { type, value } = action;
  switch (type) {
    case 'INIT_VALUE':
      Object.keys(searches[value]).forEach((key) => {
        Object.assign(searches, { [value]: { ...searches[value], [key]: null } });
      });
      return { ...searches };
    case 'SET_PERIOD':
      return {
        ...searches,
        period: {
          ...searches.period,
          ...value,
        },
      };
    case 'SET_PRICE':
      return {
        ...searches,
        price: { minPrice: value.minPrice, maxPrice: value.maxPrice },
      };
    case 'SET_PERSONNEL':
      return {
        ...searches,
        personnel: {
          ...searches.personnel,
          ...value,
        },
      };
    default:
      throw new Error('Unhandled action');
  }
}

type DispatchType = Dispatch<ActionType>;

export const SearchContext = createContext<SearchType | null>(null);
export const AddSearchContext = createContext<DispatchType | null>(null);

const initSearch = {
  period: {
    checkIn: undefined,
    checkOut: undefined,
  },
  price: {
    minPrice: undefined,
    maxPrice: undefined,
  },
  personnel: {
    adult: undefined,
    teenager: undefined,
    child: undefined,
  },
};

export function SearchProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [searches, addSearch] = useReducer(searchReducer, initSearch);
  return (
    <SearchContext.Provider value={searches}>
      <AddSearchContext.Provider value={addSearch}>{children}</AddSearchContext.Provider>
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const search = useContext(SearchContext);
  if (!search) throw new Error('Cannot find SearchProvider');
  return search;
}

export function useAddSearch() {
  const addSearch = useContext(AddSearchContext);
  if (!addSearch) throw new Error('Cannot find AddSearchProvider');
  return addSearch;
}
