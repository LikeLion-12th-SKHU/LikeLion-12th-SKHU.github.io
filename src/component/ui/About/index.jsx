import { TEXT } from '../../../constants/text';
import BannerTextArea from '../Banner';
import ActivityCard from '../ActivityCard';
const About = () => {
  const ActivityList = TEXT.activities.map(({ title, content, img }) => {
    return (
      <ActivityCard.CardWrapper
        style={{
          width: '250px',
          gap: '5px',
          display: 'flex',
          margin: '15px auto',
        }}
        key={title}
      >
        <ActivityCard.Image src={img} width={80} height={80} />
        <ActivityCard.Title title={title} className="orange" />
        <ActivityCard.Content content={content} />
      </ActivityCard.CardWrapper>
    );
  });
  return (
    <section
      style={{
        minHeight: '100vh',
      }}
      id="about"
    >
      <BannerTextArea
        bannerType="About"
        bannerTitle="멋쟁이사자처럼이란?"
        bannerContentText={TEXT.about}
      />
      <div
        style={{
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '25px auto',
          flexWrap: 'wrap',
        }}
      >
        {ActivityList}
      </div>
    </section>
  );
};
export default About;
