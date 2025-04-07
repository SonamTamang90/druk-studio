import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto max-w-7xl px-8 lg:px-11">{children}</div>;
};

export default Container;
