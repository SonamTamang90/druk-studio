interface GridContainerProps {
  columns?: string | number;
  children: React.ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = ({ columns = "3" }) => {
  return <div className={`grid-cols-1 lg:grid-cols-${columns}`}></div>;
};

export default GridContainer;
