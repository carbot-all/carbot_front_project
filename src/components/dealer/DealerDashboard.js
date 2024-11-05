import React, { useState, useEffect } from 'react';
import './DealerDashboard.css';
import data from './data.json';

const DealerDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('전체');
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [memo, setMemo] = useState('');

  useEffect(() => {
    setApplications(data);
    setFilteredApplications(data);
  }, []);

  useEffect(() => {
    filterApplications(selectedTab);
  }, [selectedTab, applications]);

  const filterApplications = (status) => {
    if (status === '전체') {
      setFilteredApplications(applications);
    } else {
      setFilteredApplications(
        applications.filter((app) => app.status === status)
      );
    }
  };

  const handleTabChange = (status) => {
    setSelectedTab(status);
    setSelectedApplication(null); // 탭 변경 시 모달 닫기
  };

  const handleStatusClick = (application) => {
    if (application.status === '신청중') {
      // "신청중"일 때는 상태를 "진행중"으로 변경
      const updatedApplications = applications.map((app) =>
        app.id === application.id ? { ...app, status: '진행중' } : app
      );
      setApplications(updatedApplications);
    } else if (
      application.status === '진행중' ||
      application.status === '완료'
    ) {
      // "진행중" 또는 "완료"일 때는 모달을 오픈
      setSelectedApplication(application);
      setMemo(application.memo || '');
    }
  };

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  };

  const handleSaveMemo = () => {
    const updatedApplications = applications.map((app) =>
      app.id === selectedApplication.id ? { ...app, memo, status: '완료' } : app
    );
    setApplications(updatedApplications);
    setSelectedApplication(null); // 모달 닫기
    setSelectedTab('완료'); // "완료" 탭으로 이동
  };

  return (
    <div className="dealer-dashboard">
      <div className="dealer-dashboard-sidebar">
        <button
          className={selectedTab === '전체' ? 'active-tab' : ''}
          onClick={() => handleTabChange('전체')}
        >
          전체
        </button>
        <button
          className={selectedTab === '신청중' ? 'active-tab' : ''}
          onClick={() => handleTabChange('신청중')}
        >
          신청중
        </button>
        <button
          className={selectedTab === '진행중' ? 'active-tab' : ''}
          onClick={() => handleTabChange('진행중')}
        >
          진행중
        </button>
        <button
          className={selectedTab === '완료' ? 'active-tab' : ''}
          onClick={() => handleTabChange('완료')}
        >
          완료
        </button>
      </div>

      <div className="dealer-dashboard-content">
        <h2>최카봇 딜러님의 상담페이지 입니다.</h2>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>접수된 상담</th>
              <th>메모</th>
              <th>신청날짜</th>
              <th>진행 상태</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app, index) => (
              <tr key={app.id}>
                <td>{index + 1}</td>
                <td>{app.name}님의 상담 신청 내용 입니다.</td>
                <td>메모</td>
                <td>{app.request_date}</td>
                <td>
                  <button onClick={() => handleStatusClick(app)}>
                    {app.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedApplication && (
        <div className="dealer-dashboard-modal">
          <div className="dealer-dashboard-modal-content">
            <h3>상담 접수번호 : {selectedApplication.id}</h3>
            <div className="dealer-dashboard-modal-body">
              <div className="dealer-dashboard-applicant-info">
                <p>이름: {selectedApplication.name}</p>
                <p>전화번호: {selectedApplication.phone}</p>
                <p>성별: {selectedApplication.gender}</p>
                <p>고객 요청사항: {selectedApplication.memo}</p>
              </div>
              <div className="dealer-dashboard-memo-section">
                <textarea
                  value={memo}
                  onChange={handleMemoChange}
                  placeholder="메모를 입력하세요..."
                />
                <button
                  onClick={handleSaveMemo}
                  className="dealer-dashboard-complete-button"
                >
                  완료
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealerDashboard;
