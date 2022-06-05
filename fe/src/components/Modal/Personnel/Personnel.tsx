import React from 'react';
import styled from 'styled-components';
import Section from 'components/common/Section';
import { ModalProps, PersonnelType } from 'components/SearchBar/types';
import { ReactComponent as MinusIcon } from 'img/svg/minus-circle.svg';
import { ReactComponent as PlusIcon } from 'img/svg/plus-circle.svg';
import info from 'helpers/constant';

const StyledSection = styled.div`
  display: flex;

  section {
    width: 80px;
    margin: 0px 80px 0px 0px;
    h3 {
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      color: #010101;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #828282;
    }
  }
`;

const PersonnelController = styled.div`
  display: flex;
  width: 116px;
  align-items: center;
  p {
    margin: 0px 19px;
  }
  button {
    padding: 0;
    background: transparent;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

const MinusButton = styled.button`
  path {
    ${({ count, min }) => (count || 0) === min && `stroke: #e0e0e0;`}
  }
`;

const PlusButton = styled.button`
  path {
    ${({ count, max }) => count === max && `stroke: #e0e0e0;`}
  }
`;

const SplitLine = styled.div`
  width: 272px;
  height: 1px;
  background: #e0e0e0;
  margin: 24px 0px;
`;

export default function Personnel({ search, addSearch }: ModalProps<PersonnelType>) {
  const titleArray = Object.keys(search);
  const handlePersonnel = (e: string, type: string) => {
    const current = search[e] || 0;
    const surplus = type === 'increment' ? +1 : -1;
    const value = { [e]: current + surplus };
    const needProtector = e !== 'adult' && !search.adult;

    addSearch({
      type: 'SET_PERSONNEL',
      value: needProtector ? { ...value, adult: 1 } : value,
    });
  };

  return (
    <>
      {titleArray.map((e) => (
        <div key={e}>
          <StyledSection>
            <Section title={info.personnel.value[e].title} value={info.personnel.value[e].description || 0} />
            <PersonnelController count={search[e]}>
              <MinusButton
                count={search[e]}
                min={info.personnel.range.min}
                disabled={search[e] === info.personnel.range.min && 'disabled'}
                onClick={() => handlePersonnel(e, 'decrement')}
              >
                <MinusIcon />
              </MinusButton>
              <p>{search[e] || 0}</p>
              <PlusButton
                count={search[e]}
                max={info.personnel.range.max}
                disabled={search[e] === info.personnel.range.max && 'disabled'}
                onClick={() => handlePersonnel(e, 'increment')}
              >
                <PlusIcon />
              </PlusButton>
            </PersonnelController>
          </StyledSection>
          <SplitLine />
        </div>
      ))}
    </>
  );
}
