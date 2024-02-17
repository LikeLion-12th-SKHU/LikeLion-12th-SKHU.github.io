import BannerTextArea from '../Banner';
import { TEXT } from '../../../constants/text';
import Carousel from '../Carousel';
const Project = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
      }}
    >
      <BannerTextArea
        bannerType="Project"
        bannerTitle="프로젝트"
        bannerContentText="멋사 10기와 멋시 11기의 프로젝트입니다."
      />
      <Carousel content={TEXT.projects} />
    </section>
  );
};
export default Project;
