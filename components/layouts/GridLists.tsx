interface ListItem {
  id: number;
  name: string;
}

const GridLists = ({ lists = [] }: { lists: ListItem[] }) => {
  return (
    <div className="grid grid-cols-3">
      {lists.map((item, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
};

export default GridLists;
