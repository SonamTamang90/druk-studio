const Label = ({ name, children }) => {
  return (
    <label htmlFor={name} className="block text-sm/6 font-medium text-white">
      {children}
    </label>
  );
};

export default Label;
