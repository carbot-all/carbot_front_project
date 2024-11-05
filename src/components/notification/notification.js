// Notification.js
import React, { useState } from 'react';
import './notification.css';

const Notification = () => {
  const [selectedNotice, setSelectedNotice] = useState(null);

  // 임시 공지사항 데이터
  const notices = [
    {
      id: 1,
      title: '[공지] 전기차 차량별 배터리 제조사 현황 안내',
      date: '2024.10.23',
    },
    {
      id: 2,
      title: '[이벤트] 전기차 차량별 배터리 제조사 현황 안내',
      date: '2024.10.23',
    },
    {
      id: 3,
      title: '[공지] 전기차 차량별 배터리 제조사 현황 안내',
      date: '2024.10.23',
    },
  ];

  // 공지사항 클릭 핸들러
  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
  };

  // 목록 화면으로 돌아가기
  const handleBackToList = () => {
    setSelectedNotice(null);
  };

  return (
    <div className="notification-container">
      <h2 className="notification-title">공지사항</h2>
      {selectedNotice ? (
        // 상세 화면
        <div className="notice-detail">
          <h3>{selectedNotice.title}</h3>
          <p className="notice-date">{selectedNotice.date}</p>
          <div className="notice-content">
            <p>안녕하세요 CARBOT 관리자입니다.</p>
            <p>
              테스트 공지사항입니다. 오늘은 10월 30일 오후 12시 18분 입니다.
              오늘의 점심 메뉴는 순두부찌개 입니다.
            </p>
            <p>아래와 같이 공지사항을 전달드립니다.</p>
            <p>감사합니다.</p>
          </div>
          <button className="back-button" onClick={handleBackToList}>
            목록
          </button>
        </div>
      ) : (
        // 목록 화면
        <div className="notice-list">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="notice-card"
              onClick={() => handleNoticeClick(notice)}
            >
              <h3>{notice.title}</h3>
              <p className="notice-date">{notice.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notification;
