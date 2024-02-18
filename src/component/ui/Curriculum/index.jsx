import { motion } from 'framer-motion';
import { useState } from 'react';
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
        style={{
          width: '60%',
          display: 'flex',
          margin: '25px auto',
          flexWrap: 'wrap',
        }}
      >
        <h3>{part} 타임라인</h3>
      </div>
    </section>
  );
};
export default Curriculum;
