import { ReactNode } from "react";

const GridContainer = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="border-light-100/5 grid grid-cols-1 border-l sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </ul>
  );
};

export default GridContainer;
