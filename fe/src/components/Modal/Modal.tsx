import React from 'react';
import styled from 'styled-components';
import ModalPortal from 'Portal';
import Personnel from 'components/Modal/Personnel/Personnel';
import { useAddSearch, useSearch } from 'context/SearchProvider';
import Period from 'components/Modal/Period/Period';
import Price from 'components/SearchBar/Price/Price';

const BackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
`;

const ModalBlock = styled.div<{ position: number }>`
  width: ${({ width }) => width}px;
  height: max-content;
  padding: 55px;
  position: absolute;
  top: 200px;
  border-radius: 60px;
  background: #fff;
`;

export default function Modal({
  shown,
  onClose,
  content,
}: {
  shown: boolean;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  content: string;
}): JSX.Element {
  const blockEvent = (event: React.MouseEvent<HTMLButtonElement>) => event.stopPropagation();
  const search = useSearch();
  const addSearch = useAddSearch();

  const modal = {
    period: { size: { width: 916 }, element: Period },
    price: { size: { width: 493 }, element: Price },
    personnel: { size: { width: 400 }, element: Personnel },
  };

  const Element = modal[content].element;

  return (
    <ModalPortal>
      {shown && (
        <BackGround role="button" tabIndex={0} className="ModalBackGround" onClick={onClose} onKeyDown={onClose}>
          <ModalBlock onClick={blockEvent} width={modal[content].size.width}>
            <Element search={search[content]} addSearch={addSearch} />
          </ModalBlock>
        </BackGround>
      )}
    </ModalPortal>
  );
}
