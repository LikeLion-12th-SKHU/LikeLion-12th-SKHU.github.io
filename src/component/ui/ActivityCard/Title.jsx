export const Title = ({ title, ...rest }) => {
  return (
    <h3 style={{ display: 'flex', ...rest.style }} {...rest}>
      {title}
    </h3>
  );
};
