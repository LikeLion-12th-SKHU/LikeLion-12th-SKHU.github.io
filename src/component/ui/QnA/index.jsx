import './index.css';
import { TEXT } from '../../../constants/text';
import BannerTextArea from '../Banner';
const QnA = () => {
  return (
    <section
      style={{
        height: '100vh',
      }}
    >
      <BannerTextArea
        bannerType=""
        bannerTitle="자주 묻는 질문"
        bannerContentText=""
        style={{
          color: '#1C1B1A',
        }}
      />

      <div
        className="qna-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          margin: '0 auto',
        }}
      >
        {TEXT.QnA.map((qna) => (
          <details
            key={qna.question}
            style={{
              padding: '15px',
              cursor: 'pointer',
              borderBottom: '2px solid #d1d1d1',
            }}
          >
            <summary className="question">Q: {qna.question}</summary>
            <div className="answer">A: {qna.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default QnA;
