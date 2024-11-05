import React, { useState } from 'react';
import './Membership.css';
import CarInfo from './CarInfo';

const Membership = ({ member, onClose }) => {
  const [showCarInfo, setShowCarInfo] = useState(false);

  const handleCarInfoOpen = () => setShowCarInfo(true);
  const handleCarInfoClose = () => setShowCarInfo(false);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="membership-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>상세조회</h2>
        <p>상태: {member.status}</p>
        <table className="membership-details-table">
          <tbody>
            <tr>
              <td>아이디</td>
              <td>{member.username}</td>
            </tr>
            <tr>
              <td>회원명</td>
              <td>{member.name}</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>{member.email}</td>
            </tr>
            <tr>
              <td>가입 일자</td>
              <td>{member.joinDate}</td>
            </tr>
            <tr>
              <td>출생 연도</td>
              <td>1990</td>
            </tr>
            <tr>
              <td>성별</td>
              <td>남</td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>010-1234-5678</td>
            </tr>
            <tr>
              <td>거주지</td>
              <td>서울</td>
            </tr>
            <tr>
              <td>차량 보유 여부</td>
              <td>
                Y{' '}
                <button onClick={handleCarInfoOpen} className="triangle-button">
                  ▶
                </button>
              </td>
            </tr>
            <tr>
              <td>추천 받은 차량 정보</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <button onClick={onClose}>닫기</button>

        {/* 차량 정보 모달 */}
        {showCarInfo && <CarInfo onClose={handleCarInfoClose} />}
      </div>
    </div>
  );
};

export default Membership;
