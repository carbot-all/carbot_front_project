import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Eximage from '../../images/genesis.png'; // 이미지 경로 설정
import './mypage.css';
import Proposal from './modal/proposal';

function MyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePage, setActivePage] = useState('interest');

  const renderContent = () => {
    switch (activePage) {
      case 'interest':
        return (
          <div className='mypage-container'>
            <div className='mypage-card'>
              <img src={Eximage} alt='GV80 coupe' />
              <div className='mypage-info'>
                <p>모델명: GV80 coupe</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className='proposal-button'
                >
                  구매 상담 신청
                </button>

                {isModalOpen && (
                  <Proposal onClose={() => setIsModalOpen(false)} />
                )}
              </div>
            </div>
            <div className='mypage-card'>
              <img src={Eximage} alt='GV80 coupe' />
              <div className='mypage-info'>
                <p>모델명: GV80 coupe</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className='proposal-button'
                >
                  구매 상담 신청
                </button>

                {isModalOpen && (
                  <Proposal onClose={() => setIsModalOpen(false)} />
                )}
              </div>
            </div>
            <div className='mypage-card'>
              <img src={Eximage} alt='GV80 coupe' />
              <div className='mypage-info'>
                <p>모델명: GV80 coupe</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className='proposal-button'
                >
                  구매 상담 신청
                </button>

                {isModalOpen && (
                  <Proposal onClose={() => setIsModalOpen(false)} />
                )}
              </div>
            </div>
          </div>
        );
      case 'consultation':
        return <p>내 상담 내역이 표시됩니다.</p>;
      case 'profile':
        return <p>회원 정보 수정 페이지입니다.</p>;
      default:
        return null;
    }
  };

  return (
    <div className='my-page'>
      <div className='button-group'>
        <button
          onClick={() => setActivePage('interest')}
          className={activePage === 'interest' ? 'active' : ''}
        >
          나의 관심 차량
        </button>
        <button
          onClick={() => setActivePage('consultation')}
          className={activePage === 'consultation' ? 'active' : ''}
        >
          내 상담 내역
        </button>
        <button
          onClick={() => setActivePage('profile')}
          className={activePage === 'profile' ? 'active' : ''}
        >
          회원 정보 수정
        </button>
      </div>
      <div className='content-area'>{renderContent()}</div>
    </div>
  );
}

export default MyPage;
