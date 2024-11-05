import React, { useState } from "react";
import "./Join.css";
import { Link, useNavigate } from "react-router-dom";
import TermsUse from "./AuthModal/TermsUse";
import axios from "axios";

const Join = () => {
  const [formData, setFormData] = useState({
    email: "",
    id: "",
    phone: "",
    name: "",
    password: "",
    confirmPassword: "",
    birthYear: "",
    residence: "",
    gender: "",
    termsAgree: false,
    privacyAgree: false,
    thirdPartyAgree: false,
    ageConfirm: false,
  });
  const [errors, setErrors] = useState({});
  const [verificationMessage, setVerificationMessage] = useState("");
  const [showTermsModal, setShowTermsModal] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleGenderChange = (value) => {
    setFormData({ ...formData, gender: value });
    setErrors({ ...errors, gender: "" });
  };

  const handleOpenTermsModal = (content) => {
    setShowTermsModal(content);
  };

  const handleCloseTermsModal = () => {
    setShowTermsModal(null);
  };

  const handleVerification = () => {
    alert("인증이 완료되었습니다.");
  };

  const navigate = useNavigate();

  const signupcomplete = () => {
    axios
      .post("http://localhost:8001/sign_up", {
        customer_id: formData.id,
        customer_pw: formData.password,
        customer_email: formData.email,
        customer_name: formData.name,
        customer_phone: formData.phone,
        customer_gender: formData.gender,
      })
      .then((response) => {
        alert("회원가입이 완료되었습니다.");
        navigate("/addInfo"); // 회원가입 완료 후 addInfo 페이지로 이동
      })
      .catch((error) => {
        alert(error.response?.data?.message || "회원가입에 실패했습니다.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email) newErrors.email = "이메일을 입력해 주세요.";
    if (!formData.id) newErrors.id = "아이디를 입력해 주세요.";
    if (!formData.phone) newErrors.phone = "전화번호를 입력해 주세요.";
    if (!formData.name) newErrors.name = "이름을 입력해 주세요.";
    if (!formData.password) newErrors.password = "비밀번호를 입력해 주세요.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호를 다시 확인해 주세요.";
    }
    if (!formData.birthYear) newErrors.birthYear = "*";
    if (!formData.residence) newErrors.residence = "*";
    if (!formData.gender) newErrors.gender = "*";
    if (!formData.termsAgree) newErrors.termsAgree = "*";
    if (!formData.privacyAgree) newErrors.privacyAgree = "*";
    if (!formData.thirdPartyAgree) newErrors.thirdPartyAgree = "*";
    if (!formData.ageConfirm) newErrors.ageConfirm = "*";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="join-container">
      <div className="join-box">
        <h1>회원가입</h1>
        <form className="join-form" onSubmit={handleSubmit}>
          <div className="input-fields-box">
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="이메일 입력"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              <button
                type="button"
                className="verify-button"
                onClick={handleVerification}
              >
                인증
              </button>
            </div>
            {verificationMessage && (
              <p className="verification-message">{verificationMessage}</p>
            )}
            {errors.email && (
              <p className="join-error-message">{errors.email}</p>
            )}

            <div className="input-group">
              <input
                type="text"
                name="id"
                placeholder="아이디 입력"
                value={formData.id}
                onChange={handleChange}
                className={errors.id ? "error" : ""}
              />
              <button type="button" className="check-button">
                중복 체크
              </button>
            </div>
            {errors.id && <p className="join-error-message">{errors.id}</p>}

            <input
              type="text"
              name="phone"
              placeholder="전화번호 입력"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && (
              <p className="join-error-message">{errors.phone}</p>
            )}

            <input
              type="text"
              name="name"
              placeholder="이름 입력"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <p className="join-error-message">{errors.name}</p>}

            <input
              type="password"
              name="password"
              placeholder="비밀번호 입력"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
            />
            {errors.password && (
              <p className="join-error-message">{errors.password}</p>
            )}

            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? "error" : ""}
            />
            {errors.confirmPassword && (
              <p className="join-error-message">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="gender-box">
            <div className="checkbox-group">
              {errors.gender && (
                <p className="join-error-message">{errors.gender}</p>
              )}
              <label>성별:</label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="남자"
                  checked={formData.gender === "남자"}
                  onChange={() => handleGenderChange("남자")}
                />{" "}
                남자
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="여자"
                  checked={formData.gender === "여자"}
                  onChange={() => handleGenderChange("여자")}
                />{" "}
                여자
              </label>
            </div>
          </div>
          <div className="terms-box">
            <label>
              <input
                type="checkbox"
                name="termsAgree"
                checked={formData.termsAgree}
                onChange={handleChange}
              />
              <span onClick={() => handleOpenTermsModal("terms")}>
                이용약관에 동의합니다.
              </span>
              {errors.termsAgree && (
                <p className="join-error-message">{errors.termsAgree}</p>
              )}
            </label>

            <label>
              <input
                type="checkbox"
                name="privacyAgree"
                checked={formData.privacyAgree}
                onChange={handleChange}
              />
              <span onClick={() => handleOpenTermsModal("privacy")}>
                개인정보 수집, 이용 동의에 동의합니다.
              </span>
              {errors.privacyAgree && (
                <p className="join-error-message">{errors.privacyAgree}</p>
              )}
            </label>

            <label>
              <input
                type="checkbox"
                name="thirdPartyAgree"
                checked={formData.thirdPartyAgree}
                onChange={handleChange}
              />
              <span onClick={() => handleOpenTermsModal("thirdParty")}>
                개인정보 제3자 제공 동의에 동의합니다.
              </span>
              {errors.thirdPartyAgree && (
                <p className="join-error-message">{errors.thirdPartyAgree}</p>
              )}
            </label>
            <label>
              <input
                type="checkbox"
                name="ageConfirm"
                checked={formData.ageConfirm}
                onChange={handleChange}
              />
              저는 만 18세 이상입니다.
              {errors.ageConfirm && (
                <p className="join-error-message">{errors.ageConfirm}</p>
              )}
            </label>
          </div>
          <button
            type="submit"
            className="submit-button"
            onClick={signupcomplete}
          >
            확인
          </button>

          <div className="footer-links">
            <Link to="/login">이미 회원이신가요? 로그인</Link>
          </div>
        </form>
      </div>

      {/* 이용약관 모달 */}
      {showTermsModal && (
        <TermsUse
          selectedContent={showTermsModal}
          onClose={handleCloseTermsModal}
        />
      )}
    </div>
  );
};

export default Join;
