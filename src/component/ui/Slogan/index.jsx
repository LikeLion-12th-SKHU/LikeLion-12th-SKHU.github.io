import TransitionHeading from '../TransitionHeading';
import { TEXT } from '../../../constants/text';
import { motion } from 'framer-motion';
import './index.css';

const SloganArea = () => {
  return (
    <main className="slogan-container">
      <section className="text-container">
        <TransitionHeading
          text={TEXT.slogan}
          from={0}
          to={1}
          textStyle={{
            margin: '15px ',
          }}
          className="transition-text"
        />
      </section>
      <motion.img
        width={350}
        height={350}
        src='../../../'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1.2,
        }}
      />
    </main>
  );
};

export default SloganArea;
