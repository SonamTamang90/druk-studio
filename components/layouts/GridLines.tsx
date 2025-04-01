const GridLines = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 px-4 sm:px-8">
      <div className="mx-auto flex h-full max-w-7xl gap-[14px]">
        <div className="flex-1 border-l border-white/5 sm:block" />
        <div className="hidden flex-1 border-none border-white/5 sm:block" />
        <div className="hidden flex-1 border-r border-white/5 lg:block" />
      </div>
    </div>
  );
};

export default GridLines;
