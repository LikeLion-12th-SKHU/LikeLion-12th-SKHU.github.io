import './index.css';
const BannerTextArea = ({
  bannerType,
  bannerTitle,
  bannerContentText,
  ...rest
}) => {
  return (
    <section className="about-container">
      <h3 className="orange about-category" {...rest}>{bannerType}</h3>
      <h2 className="about-title">{bannerTitle}</h2>
      <p className="about-text">{bannerContentText}</p>
    </section>
  );
};

export default BannerTextArea;
