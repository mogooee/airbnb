import React from 'react';
import { useAddSearch, useSearch } from 'context/SearchProvider';
import { useActiveModal, useContentModal, useSetActiveModal, useSetContentModal } from 'context/ModalProvider';
import DeleteButton from 'components/SearchBar/SearchList/DeleteButton';
import Modal from 'components/Modal/Modal';
import ModalPortal from 'Portal';
import { SectionProps } from 'components/SearchBar/types';

import info from 'helpers/constant';

export default function SearchList({
  Element,
  id,
}: {
  Element: React.ComponentType<SectionProps<any>>;
  id: string;
}): React.ReactElement {
  // 검색 필터 입력된 값
  const search = useSearch();
  const addSearch = useAddSearch();

  // 모달 활성화 상태
  const isActiveModal = useActiveModal();
  const setActiveModal = useSetActiveModal();

  // 현재 활성화된 모달
  const content = useContentModal();
  const setContent = useSetContentModal();

  const handleModalClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveModal(false);
    setContent('');
    event.stopPropagation();
  };

  const hasValue = () => Object.values(search[id]).filter((e) => e).length > 0;
  const initValue = () => addSearch({ type: 'INIT_VALUE', value: id });
  const isCurrentActive = () => content === id;

  return (
    <>
      <Element search={search[id]} info={info[id]} />
      {hasValue() && <DeleteButton initValue={initValue} />}
      {isCurrentActive() && (
        <ModalPortal>
          <Modal shown={isActiveModal} onClose={handleModalClose} content={content} />
        </ModalPortal>
      )}
    </>
  );
}
