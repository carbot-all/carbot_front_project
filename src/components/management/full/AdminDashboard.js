import React, { useState } from 'react';
import './AdminDashboard.css';
import Membership from './modal/Membership';
import NoticeManagement from './notice/NoticeManagement';
import ConsultationManagement from './consultation/ConsultationManagement';
import DealerManagement from './dealer/DealerManagement';

const AdminDashboard = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeMenu, setActiveMenu] = useState('회원 관리');

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseMembershipModal = () => {
    setSelectedMember(null);
  };

  const members = [
    {
      id: 1,
      username: 'carbot',
      name: '최지원',
      email: 'carbot@gmail.com',
      status: '가입',
      joinDate: '2024.10.16',
    },
    {
      id: 2,
      username: 'asdfgh12',
      name: '김정현',
      email: 'asdf@naver.com',
      status: '탈퇴',
      joinDate: '2024.10.26',
    },
    {
      id: 3,
      username: 'qwerty',
      name: '박영철',
      email: 'qwer@gmail.com',
      status: '가입',
      joinDate: '2024.09.12',
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <button onClick={() => setActiveMenu('회원 관리')}>회원 관리</button>
        <button onClick={() => setActiveMenu('상담 관리')}>상담 관리</button>
        <button onClick={() => setActiveMenu('공지사항 관리')}>
          공지사항 관리
        </button>
        <button onClick={() => setActiveMenu('딜러 관리')}>딜러 관리</button>
      </div>

      <div className="dashboard-content">
        {activeMenu === '회원 관리' && (
          <>
            <h2 className="dashboard-content-title">회원 조회</h2>
            <table className="dashboard-content-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>아이디</th>
                  <th>회원명</th>
                  <th>이메일</th>
                  <th>가입일자</th>
                  <th>상태</th>
                  <th>정보</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={member.id}>
                    <td>{index + 1}</td>
                    <td>{member.username}</td>
                    <td>{member.name}</td>
                    <td>{member.email}</td>
                    <td>{member.joinDate}</td>
                    <td>{member.status}</td>
                    <td>
                      <button onClick={() => handleMemberClick(member)}>
                        자세히 보기
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {activeMenu === '상담 관리' && <ConsultationManagement />}

        {activeMenu === '공지사항 관리' && <NoticeManagement />}

        {activeMenu === '딜러 관리' && <DealerManagement />}
      </div>

      {/* 회원 정보 모달 */}
      {selectedMember && (
        <Membership
          member={selectedMember}
          onClose={handleCloseMembershipModal}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
