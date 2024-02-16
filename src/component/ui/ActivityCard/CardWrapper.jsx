export const CardWrapper = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        ...rest.style,
      }}
    >
      {children}
    </div>
  );
};
