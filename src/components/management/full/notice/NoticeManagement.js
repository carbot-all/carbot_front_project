import React, { useState } from 'react';
import noticesData from './notices.json';
import NoticeForm from './NoticeForm';
import NoticeDetail from './NoticeDetail';
import './NoticeManagement.css';

const NoticeManagement = () => {
  const [notices, setNotices] = useState(noticesData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  const handleFormOpen = () => {
    setSelectedNotice(null); // 공지사항 작성 모드로 설정
    setIsFormOpen(true);
  };

  const handleFormClose = () => setIsFormOpen(false);

  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice); // 공지사항 조회+수정+삭제 모드로 설정
  };

  const handleFormSubmit = (newNotice) => {
    setNotices([...notices, { ...newNotice, id: notices.length + 1 }]);
    setIsFormOpen(false);
  };

  const handleUpdate = (updatedNotice) => {
    setNotices(
      notices.map((notice) =>
        notice.id === updatedNotice.id ? updatedNotice : notice
      )
    );
    setSelectedNotice(null);
  };

  const handleDelete = (id) => {
    setNotices(notices.filter((notice) => notice.id !== id));
    setSelectedNotice(null);
  };

  return (
    <div className="notice-management-container">
      <h2 className="notice-management-title">공지사항 관리</h2>
      <table className="notice-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>분류</th>
            <th>담당자</th>
            <th>작성 날짜</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice, index) => (
            <tr key={notice.id}>
              <td>{index + 1}</td>
              <td>
                <button
                  className="notice-title-button"
                  onClick={() => handleNoticeClick(notice)}
                >
                  {notice.title}
                </button>
              </td>
              <td>{notice.category}</td>
              <td>{notice.author}</td>
              <td>{notice.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleFormOpen} className="notice-register-button">
        등록
      </button>

      {/* 공지사항 작성 모달 */}
      {isFormOpen && (
        <NoticeForm onClose={handleFormClose} onSubmit={handleFormSubmit} />
      )}

      {/* 공지사항 상세 조회/수정/삭제 모달 */}
      {selectedNotice && (
        <NoticeDetail
          notice={selectedNotice}
          onClose={() => setSelectedNotice(null)}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default NoticeManagement;
