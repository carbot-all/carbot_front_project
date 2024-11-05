import React, { useState } from 'react';
import './NoticeForm.css';

const NoticeForm = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('공지');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNotice = {
      title,
      category,
      author: '관리자',
      date: new Date().toISOString().split('T')[0],
      content,
    };
    onSubmit(newNotice); // 등록 처리
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="notice-form-modal" onClick={(e) => e.stopPropagation()}>
        <h2>공지사항 등록</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="제목을 입력해 주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="공지">공지</option>
            <option value="이벤트">이벤트</option>
          </select>
          <textarea
            placeholder="내용을 입력해 주세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit">등록</button>
          <button type="button" onClick={onClose}>
            취소
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoticeForm;
