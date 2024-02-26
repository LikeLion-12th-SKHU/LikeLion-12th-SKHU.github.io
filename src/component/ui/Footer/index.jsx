import './index.css';

import PhoneIcon from '../IconUI/PhoneIcon';
import EmailIcon from '../IconUI/EmailIcon';
const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        width: '100%',
        height: '50px',
        display: 'flex',
      }}
    >
      <div className="footer_content">
        <h3>About us</h3>
        <p>당신의 내일과 가장 가까운 오늘을 만듭니다.</p>
        <p>
          성공회대학교 멋쟁이사자처럼은 코딩에 대한 열정을 가진 대학생들이 함께
          모여 공부하는 동아리입니다.
        </p>
      </div>
      <div
        className="footer_content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <h4>Information</h4>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <PhoneIcon />
          <span>010-7224-2721</span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <EmailIcon />
          <span>sungkonghoe.univ@likelion.org</span>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '15px',
          }}
          className="footer_content"
        >
          <img
            src="https://likelion-11th-skhu.github.io/static/img/footer/instagrame.png"
            width={30}
            height={30}
            alt="인스타그램 이미지"
            style={{
              cursor: 'pointer',
            }}
            onClick={() =>
              window.open('https://www.instagram.com/likelion_skhu/')
            }
          />
          <img
            src="https://likelion-11th-skhu.github.io/static/img/footer/github.png"
            width={30}
            height={30}
            alt="깃허브 이미지"
            style={{
              cursor: 'pointer',
            }}
            onClick={() => window.open('https://github.com/LikeLion-12th-SKHU')}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
