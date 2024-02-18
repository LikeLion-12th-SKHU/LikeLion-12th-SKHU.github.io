import './index.css';
import BannerTextArea from '../Banner';
const Recruit = ({ recruitlist, bannerType, bannerTitle, bannerContent }) => {
  const recruitList = recruitlist.map(({ title, content }) => {
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
      id="recruit"
    >
      <BannerTextArea
        bannerType={bannerType}
        bannerTitle={bannerTitle}
        bannerContentText={bannerContent}
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
