interface ContainerProps {
  children: React.ReactNode;
  background?: string;
}

const Container: React.FC<ContainerProps> = ({ children, background }) => {
  return (
    <div className={`relative border-y border-[#D9D9D9]/15 bg-[${background}]`}>
      <div className="relative max-w-7xl px-8 md:px-11">
        <div className="absolute inset-0">
          <div className="absolute z-10 -top-0.5 left-8 md:left-[41.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
          <div className="absolute z-10 -top-0.5 right-8 md:right-[41.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
          <div className="absolute z-10 -bottom-0.5 left-8 md:left-[41.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
          <div className="absolute z-10 -bottom-0.5 right-8 md:right-[41.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
        </div>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

export default Container;
