import TransitionHeading from '../TransitionHeading';
import Button from '../Button';
import { TEXT } from '../../../constants/text';
import { ApplyIcon } from '../IconUI/ApplyIcon';
import { motion } from 'framer-motion';
import './index.css';

const SloganArea = () => {
  return (
    <article className="slogan-container">
      <section>
        <TransitionHeading
          text={TEXT.slogan}
          from={0}
          to={1}
          textStyle={{
            margin: '15px ',
          }}
          className="transition-text"
        />
        <Button
          type="recruit"
          content="12기 지원마감"
          icon={<ApplyIcon />}
          disabled
        />
      </section>

      <div
        style={{
          display: 'flex',
        }}
      >
        <motion.img
          width={330}
          src="/banner.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.2,
          }}
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </article>
  );
};

export default SloganArea;
