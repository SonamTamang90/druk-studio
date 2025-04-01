const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="mx-auto max-w-7xl px-8">{children}</div>;
};

export default Container;
