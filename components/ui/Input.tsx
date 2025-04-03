interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

const Input = ({ name, type, placeholder, ...props }: InputProps) => {
  return (
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      {...props}
      className="focus:-outline-offset-0.5 block w-full rounded-md bg-zinc-900 px-3 py-3 text-base text-zinc-400 outline-1 -outline-offset-1 outline-white/15 placeholder:text-gray-400 focus:outline-1 focus:outline-white/45 sm:text-sm/6"
    />
  );
};

export default Input;
