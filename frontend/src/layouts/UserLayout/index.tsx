import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import InputModal from '@/components/InputModal';

import useModal from '@/hooks/useModal';

const UserLayout = () => {
  const { openModal } = useModal();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      openModal(
        <InputModal
          title="비밀번호 입력"
          detail="해당 공간의 관계자만 접근할 수 있습니다."
          placeholder="비밀번호를 입력해주세요."
          buttonText="확인"
        />
      );
    }
  });

  return (
    <>
      <Header />
      <Suspense fallback={<div>로딩 스피너</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default UserLayout;
