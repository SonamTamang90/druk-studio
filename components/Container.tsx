const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mx-auto h-full max-w-7xl px-12 lg:px-16">{children}</div>
  );
};

export default Container;
