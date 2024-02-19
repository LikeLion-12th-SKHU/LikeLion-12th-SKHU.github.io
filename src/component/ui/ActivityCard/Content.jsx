export const Content = ({ content, ...rest }) => {
  return (
    <p style={{ display: 'flex', lineHeight: '25px', ...rest.style }} {...rest}>
      {content}
    </p>
  );
};
