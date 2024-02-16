export const Content = ({ content, ...rest }) => {
  return (
    <p style={{ display: 'flex', ...rest.style }} {...rest}>
      {content}
    </p>
  );
};
