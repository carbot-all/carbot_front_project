import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindPW.css';

const FindPassword = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false); // 인증 완료 여부
  const [showVerification, setShowVerification] = useState(false); // 인증 필드 표시 여부
  const [errors, setErrors] = useState({
    id: false,
    email: false,
  });

  const navigate = useNavigate();

  const handleValidation = () => {
    const newErrors = {
      id: id.trim() === '',
      email: email.trim() === '',
    };
    setErrors(newErrors);

    return !newErrors.id && !newErrors.email;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      alert('인증번호가 이메일로 발송되었습니다.');
      setShowVerification(true); // 인증 필드 표시
    }
  };

  const handleVerification = () => {
    if (verificationCode.trim() === '') {
      alert('인증번호를 입력해 주세요.');
    } else {
      alert('인증이 완료되었습니다.');
      setIsVerified(true); // 인증 완료 상태로 변경
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (isVerified) {
      navigate('/resetPW'); // 인증 완료 후 페이지 이동
    } else {
      alert('먼저 인증을 완료해 주세요.');
    }
  };

  return (
    <div className='pw-container'>
      <div className='pw-box'>
        <h1>비밀번호 찾기</h1>
        <form
          onSubmit={showVerification ? handleFinalSubmit : handleEmailSubmit}
          className='pw-input-box'
        >
          <p>아이디</p>
          <input
            type='text'
            placeholder='아이디 입력'
            value={id}
            onChange={(e) => setId(e.target.value)}
            className={errors.id ? 'input-error' : ''}
          />
          {errors.id && (
            <span className='error-text'>아이디를 입력해 주세요.</span>
          )}

          <p>이메일</p>
          <input
            type='email'
            placeholder='이메일 입력'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && (
            <span className='error-text'>이메일을 입력해 주세요.</span>
          )}

          {showVerification && (
            <div className='verification'>
              <input
                type='text'
                placeholder='인증번호 입력'
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <button type='button' onClick={handleVerification}>
                인증
              </button>
            </div>
          )}

          <div className='pw-button'>
            <button type='submit'>확인</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindPassword;
