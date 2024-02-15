import { motion } from 'framer-motion';
import { useMemo } from 'react';

const TransitionHeading = ({ text, from, to, textStyle, ...rest }) => {
  const transitionText = useMemo(() => {
    return text.split(' ').map((el, i) => {
      return (
        <motion.h1
          key={i}
          initial={{ opacity: from ?? 0 }}
          animate={{ opacity: to ?? 1 }}
          transition={{
            duration: i * 0.2,
            delay: i * 0.48,
          }}
          style={{
            ...textStyle,
          }}
          {...rest}
        >
          {el}
        </motion.h1>
      );
    });
  }, [text, from, to]);

  return transitionText;
};

export default TransitionHeading;
