const Input = ({
  placeholder,
  className,
}: {
  placeholder: string;
  className: string;
}) => {
  return <input placeholder={placeholder} className={className} />;
};

export default Input;
