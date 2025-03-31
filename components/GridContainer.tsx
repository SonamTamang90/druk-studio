const GridContainer = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 px-4 sm:px-6">
      <div className="mx-auto flex h-full max-w-7xl gap-[14px]">
        <div className="flex-1 border-r border-white/[7.5%] sm:block" />
        <div className="hidden flex-1 border-x border-white/[7.5%] sm:block" />
        <div className="hidden flex-1 border-l border-white/[7.5%] lg:block" />
      </div>
    </div>
  );
};

export default GridContainer;
