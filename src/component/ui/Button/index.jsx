import './index.css';

const Button = ({ type, className, icon, content, ...rest }) => {
  return (
    <button className={`${className} button-${type}`} {...rest}>
      {content}
      <i>{icon}</i>
    </button>
  );
};

export default Button;
