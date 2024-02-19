import { motion } from 'framer-motion';
import { useState } from 'react';
import { TEXT } from '../../../constants/text';
import BannerTextArea from '../Banner';
import './index.css';
const Curriculum = () => {
  const [part, setPart] = useState('프론트엔드');
  const PartBox = ({ partName, partContent }) => (
    <motion.div
      className="partbox"
      whileHover={{ scale: 1.1 }}
      style={{
        marginTop: '15px',
        background: part === partName ? '#FF7710' : '#646464',
        color: part === partName && '#000000',
        cursor: 'pointer',
        borderRadius: '10px',
      }}
      onClick={() => setPart(partName)}
    >
      <h2>{partName}</h2>
      <p>{partContent}</p>
    </motion.div>
  );

  return (
    <section
      style={{
        minHeight: '100vh',
      }}
      id="curriculum"
    >
      <BannerTextArea
        bannerContentText="본 내용은 1학기 커리큘럼만을 다루고 있습니다.
        추후 1학기 활동 중 2학기 커리큘럼을 계획할 예정입니다."
        bannerTitle="커리큘럼"
        bannerType="CURRICULUM"
      />
      <div
        style={{
          width: '60%',
          display: 'flex',
          justifyContent: 'space-around',
          margin: '25px auto',
          flexWrap: 'wrap',
          overflow: 'hidden',
        }}
      >
        <PartBox partName="프론트엔드" partContent="프론트파트" />
        <PartBox partName="백엔드" partContent="백엔드파트" />
      </div>
      <div
        className="part"
        style={{
          display: 'flex',
          margin: '25px auto',
          flexWrap: 'wrap',
          position: 'relative', // 추가
        }}
      >
        <h3
          style={{
            width: '80%',
            fontSize: '24px',
          }}
        >
          {part} 주요 타임라인
        </h3>
        <hr
          style={{
            height: '2px',
            border: 0,
            backgroundColor: '#FF7710',
            width: '80%',
          }}
        ></hr>

        {Array.from({
          length: 5,
        }).map((_, index) => (
          <div
            className="partdot-wrapper"
            key={index}
            style={{
              fontSize: '1rem',
              width: '14px',
              height: '14px',
              borderRadius: '100%',
              position: 'absolute', // 변경
              background: '#ff7710',
              zIndex: 1,
              left: `${(index + 1) * 16}%`, // 추가
            }}
          >
            <div
              className="partdot"
              style={{
                position: 'relative',
                top: 30,
              }}
            >
              {TEXT[part][index]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Curriculum;
