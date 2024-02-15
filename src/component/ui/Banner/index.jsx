import './index.css';
const BannerTextArea = ({ bannerType, bannerTitle, bannerContentText }) => {
  return (
    <section className="about-container">
      <h3 className="orange about-category">{bannerType}</h3>
      <h2 className="about-title">{bannerTitle}</h2>
      <p className="about-text">{bannerContentText}</p>
    </section>
  );
};

export default BannerTextArea;
