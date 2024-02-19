import BannerTextArea from '../Banner';
import { TEXT } from '../../../constants/text';
import Carousel from '../Carousel';
const Project = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
      }}
      id="project"
    >
      <BannerTextArea
        bannerType="Project"
        bannerTitle="프로젝트"
        bannerContentText="멋사 10기와 멋시 11기의 프로젝트입니다. 선배기수들이 만들어 낸
        멋쟁이사자처럼 프로젝트의 결과물을 확인해보세요."
      />
      <Carousel content={TEXT.projects} />
    </section>
  );
};
export default Project;
