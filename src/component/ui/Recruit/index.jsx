import './index.css';
import BannerTextArea from '../Banner';
import { TEXT } from '../../../constants/text';
const Recruit = () => {
  const recruitList = TEXT.recruit.map(({ title, content }) => {
    return (
      <div
        key={title}
        style={{
          margin: '50px auto',
        }}
      >
        <div>{title}</div>
        <div
          style={{
            fontSize: '15px',
            minWidth: '170px',
            width: 'auto',
            margin: '10px auto',
            paddingBottom: '10px',
            borderBottom: '2.72px solid #FF9E1B',
          }}
        >
          {content}
        </div>
      </div>
    );
  });
  return (
    <section
      style={{
        minHeight: '100vh',
      }}
    >
      <BannerTextArea
        bannerType="ROADMAP"
        bannerTitle="모집 일정"
        bannerContentText="멋쟁이사자처럼 성공회대 12기 아기사자들의 모집 일정입니다."
      />
      <div
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          margin: '25px auto',
          flexWrap: 'wrap',
        }}
      >
        <h2 className="recruit_heading">일정</h2>
        <div className="recruit-list">{recruitList}</div>
      </div>
    </section>
  );
};
export default Recruit;
