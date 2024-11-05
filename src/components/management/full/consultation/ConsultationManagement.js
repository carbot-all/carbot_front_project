import React, { useState } from 'react';
import consultationsData from './consultations.json';
import Consultation from '../modal/Consultations';
import './ConsultationManagement.css';

const ConsultationManagement = () => {
  const [consultations] = useState(consultationsData);
  const [selectedConsultation, setSelectedConsultation] = useState(null);

  const handleConsultationClick = (consultation) => {
    setSelectedConsultation(consultation);
  };

  const handleCloseModal = () => {
    setSelectedConsultation(null);
  };

  return (
    <div className="consultation-management-container">
      <h2 className="consultation-management-title">상담관리</h2>
      <table className="consultation-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>접수된 상담</th>
            <th>담당자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {consultations.map((consultation, index) => (
            <tr key={consultation.id}>
              <td>{index + 1}</td>
              <td>
                <button
                  className="consultation-status-button"
                  onClick={() => handleConsultationClick(consultation)}
                >
                  {consultation.status}
                </button>
              </td>
              <td>{consultation.author}</td>
              <td>{consultation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 상담 상세 모달 */}
      {selectedConsultation && (
        <Consultation
          consultation={selectedConsultation}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ConsultationManagement;
