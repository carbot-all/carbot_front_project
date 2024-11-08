import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Eximage from "../../images/genesis.png"; // 이미지 경로 설정
import "./mypage.css";
import Proposal from "./modal/proposal";

function MyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePage, setActivePage] = useState("interest");
  const [consultationData, setConsultationData] = useState([]);
  const userId = sessionStorage.getItem("userId"); // 세션 스토리지에서 userId 가져오기

  useEffect(() => {
    const fetchConsultationData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8001/consultations/${userId}`
        );
        const data = await response.json();
        setConsultationData(data);
      } catch (error) {
        console.error("Error fetching consultation data:", error);
      }
    };

    if (activePage === "consultation") {
      fetchConsultationData();
    }
  }, [activePage]);

  const renderContent = () => {
    switch (activePage) {
      case "interest":
        return (
          <div className="mypage-container">
            <div className="mypage-card">
              <img src={Eximage} alt="GV80 coupe" />
              <div className="mypage-info">
                <p>모델명: GV80 coupe</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="proposal-button"
                >
                  구매 상담 신청
                </button>

                {isModalOpen && (
                  <Proposal onClose={() => setIsModalOpen(false)} />
                )}
              </div>
            </div>
            <div className="mypage-card">
              <img src={Eximage} alt="GV80 coupe" />
              <div className="mypage-info">
                <p>모델명: GV80 coupe</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="proposal-button"
                >
                  구매 상담 신청
                </button>

                {isModalOpen && (
                  <Proposal onClose={() => setIsModalOpen(false)} />
                )}
              </div>
            </div>
            <div className="mypage-card">
              <img src={Eximage} alt="GV80 coupe" />
              <div className="mypage-info">
                <p>모델명: GV80 coupe</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="proposal-button"
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
      case "consultation":
        return (
          <div className="consultation-container">
            <table className="consultation-table">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>상담 신청 차량</th>
                  <th>담당자</th>
                  <th>신청 날짜</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                {consultationData.length > 0 ? (
                  consultationData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.no}</td>
                      <td>{item.car_model}</td>
                      <td>{item.dealer_name}</td>
                      <td>{item.created_at}</td>
                      <td>{item.consult_process}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">상담 내역이 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      case "profile":
        return <p>회원 정보 수정 페이지입니다.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="my-page">
      <div className="button-group">
        <button
          onClick={() => setActivePage("interest")}
          className={activePage === "interest" ? "active" : ""}
        >
          나의 관심 차량
        </button>
        <button
          onClick={() => setActivePage("consultation")}
          className={activePage === "consultation" ? "active" : ""}
        >
          내 상담 내역
        </button>
        <button
          onClick={() => setActivePage("profile")}
          className={activePage === "profile" ? "active" : ""}
        >
          회원 정보 수정
        </button>
      </div>
      <div className="content-area">{renderContent()}</div>
    </div>
  );
}

export default MyPage;
