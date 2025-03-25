interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="relative border-y border-[#D9D9D9]/15">
      <div className="relative max-w-7xl mx-auto px-8 lg:px-20">
        <div className="absolute inset-0">
          <div className="absolute z-10 -top-0.5 left-8 md:left-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
          <div className="absolute z-10 -top-0.5 right-8 md:right-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
          <div className="absolute z-10 -bottom-0.5 left-8 md:left-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
          <div className="absolute z-10 -bottom-0.5 right-8 md:right-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
        </div>
        <div className="relative py-11">{children}</div>
      </div>
    </div>
  );
};

export default Container;
